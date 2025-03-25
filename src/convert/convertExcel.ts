import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import * as objUtil from '../utils/objectUtils';

const KEY_ID = 'key';
const LANG_ID = 'language';
const MERGED_COL_REGEX = /__EMPTY(?:_(\d+))?/;

/** Excel Row Data */
export interface Data extends Record<string, unknown> {};

/** I/O file path options */
export interface PathOptions {
    importPath: string;
    exportPath: string;
};

export interface KeyStructure {
    [key: string]: KeyStructure | string;
};

interface Result {
    [key: string]: KeyStructure;
};

export class ExcelToJson {
    private options: PathOptions;

    constructor(options: PathOptions) {
        this.options = {
            ...options
        };
    }

    /**
     * Read Excel files first sheet
     * @returns Excel RAW Data to JSON
     */
    private readExcelFile(): Data[] {
        // Excel file
        const dataFile = xlsx.readFile(this.options.importPath);
        
        // First Excel sheet
        const sheetName = dataFile.SheetNames[0];
        const worksheet = dataFile.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet) as Data[];

        return data;
    }

    private createKeyStructure() {
        return new Proxy<KeyStructure>({}, {
            get(target, prop: string) {
                if (!target[prop]) target[prop] = {};
                return target[prop];
            }
        });
    }

    private assignValue(obj: KeyStructure, path: string[], value: string) {
        const keys = [...path];
        const lastKey = path.pop()!;
        let current = obj;

        for (const key of keys) {
            if (!current[key] || typeof current[key] === 'string') {
                current[key] = {};
            }
            current = current[key] as KeyStructure;
        }

        current[lastKey] = value;
    }

    private buildDynamicPath(row: Data, keyColumns: string[]): string[] {
        const path: string[] = [];
        let currentDepth = 0;
      
        keyColumns.forEach((column, index) => {
            const value = row[column];
            if (value && typeof value === 'string') {
                currentDepth = index;
                path[currentDepth] = value;
            }
        });
      
        return path.slice(0, currentDepth + 1);
    }
    
    private deepMerge(target: KeyStructure, source: KeyStructure) {
        Object.keys(source).forEach(([key, value]) => {
            if (typeof value === 'object') {
                if (!target[key] || typeof target[key] === 'string') {
                    target[key] = {};
                }
                this.deepMerge(target[key] as KeyStructure, value);
            } else {
                target[key] = value;
            }
        });
    }

    /**
     * Extract language message json file
     * @param data JSON data
     */
    private saveToJsonFiles(data: Data[]): void {
        const languageKeyMap = objUtil.swapKeyValue(data[0]);
        const languages = Object.values(data[0]) as string[];
        const result: Result = languages.reduce((acc, lang) => ({ ...acc, [lang]: {} }), {});

        data.slice(1).forEach(row => {
            // const path = this.buildDynamicPath(row, keys);

            languages.forEach(lang => {
                const langValue = row[languageKeyMap[lang]];
                if (!langValue || typeof langValue !== 'string') return;

                console.log(`${lang} : ${langValue}`);
                

                // const tempStructure = this.createKeyStructure();
                // this.assignValue(tempStructure, path, langValue);
                // this.deepMerge(result[lang], tempStructure);
            });
        });

        // console.log(languageKeyMap);
        console.log(data);
        // console.log('res: ');
        // console.log(result);
        
        const files: string[] = [];
        Object.entries(result).forEach(([lang, data]) => {
            const filePath = path.join(this.options.exportPath, `lang_${lang}.json`);
            files.push(filePath);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        });

        console.log(`Created files: ${files.toString()}`);
    }

    /**
     * Main Process
     * @returns promise
     */
    public async convert(): Promise<{ success: boolean; message: string }> {
        try {
            if (!fs.existsSync(this.options.importPath)) {
                return { 
                    success: false, 
                    message: `Input file not found at: ${this.options.importPath}` 
                };
            }
      
            fs.mkdir(this.options.exportPath, () => {
                return { 
                    success: false, 
                    message: `Excel data converted fail with export directory: ${this.options.exportPath}` 
                };
            });
      
            const excelData = this.readExcelFile();
            this.saveToJsonFiles(excelData);
            
            return { 
                success: true, 
                message: `Excel data successfully converted to JSON files in: ${this.options.exportPath}` 
            };
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return { 
                success: false, 
                message: `Error during conversion: ${errorMessage}` 
            };
        }
    }
}