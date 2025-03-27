import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import * as objUtil from '../utils/objectUtils';

const KEY_ID = 'key';
const MERGED_COL_REGEX = /__EMPTY(?:_(\d+))?/;

/** Excel Row Data */
interface Data extends Record<string, unknown> {}

/** I/O file path options */
export interface PathOptions {
    importPath: string;
    exportPath: string;
}

interface KeyStructure {
    [key: string]: KeyStructure | string;
}

type Result = Record<string, KeyStructure>;

interface KeyPathContext {
    pathStack: string[];
}

export class ExcelToJson {
    private options: PathOptions;

    constructor(options: PathOptions) {
        this.options = {
            ...options,
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
        const sheetName = dataFile.SheetNames[0].toString();
        const worksheet = dataFile.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet) as Data[];

        return data;
    }

    private createKeyStructure() {
        return new Proxy<KeyStructure>({}, {
            get(target, prop: string) {
                target[prop] ||= {};
                return target[prop];
            },
        });
    }

    private assignValue(obj: KeyStructure, path: string[], value: string) {
        let current = obj;

        for (let i = 0; i < path.length; i += 1) {
            const key = path[i];

            if (i === path.length - 1) {
                current[key] = value;
            } else {
                if (!current[key] || typeof current[key] === 'string') {
                    current[key] = {};
                }
                current = current[key] as KeyStructure;
            }
        }
    }

    private buildDynamicPath(row: Data, keyColumns: string[], context: KeyPathContext): string[] {
        const newPath = [...context.pathStack];

        newPath.forEach((column, index) => {
            const path = keyColumns[index];
            if (path && path !== '') {
                newPath[index] = path;
            }
        });

        keyColumns.forEach((column, depth) => {
            const key = row[column];
            if (key && typeof key === 'string') {
                newPath[depth] = key;
                for (let i = depth + 1; i < newPath.length; i += 1) {
                    newPath[i] = undefined!;
                }
            }
        });

        const validPath = newPath.filter(Boolean);
        context.pathStack = validPath;

        return validPath;
    }

    /**
     * Merging layered key message
     */
    private deepMerge(target: KeyStructure, source: KeyStructure) {
        Object.keys(source)
            .forEach((key) => {
                if (typeof source[key] === 'object') {
                    if (!target[key] || typeof target[key] === 'string') {
                        target[key] = {};
                    }
                    this.deepMerge(target[key] as KeyStructure, source[key]);
                } else {
                    target[key] = source[key];
                }
            });
    }

    /**
     * Detect changed keys
     */
    private detectKeyColumns(data: Data, languageKeyMap: Record<string, string>): string[] {
        const languageKeys = new Set(Object.values(languageKeyMap)
            .filter(Boolean));
        const currentKeyPath: string[] = [];
        const keys = Object.keys(data)
            .filter((column) => !languageKeys.has(column));
        const lastKey: string = keys[keys.length - 1] as string;

        const currentDepth = lastKey === KEY_ID
            ? 0
            : parseInt(lastKey.match(MERGED_COL_REGEX)?.[1] || '0') + 1;

        if (currentDepth === keys.length - 1) {
            return keys;
        }

        const changes = keys.map((key) => parseInt(key.match(MERGED_COL_REGEX)?.[1] || '0') + 1);
        let keyIdx = 0;
        for (let i = 0; i <= currentDepth; i += 1) {
            if (changes.includes(i)) {
                currentKeyPath.push(keys[keyIdx] as string);
                keyIdx += 1;
            } else {
                currentKeyPath.push('');
            }
        }
        return currentKeyPath;
    }

    /**
     * Extract language message json file
     * @param data JSON data
     */
    private saveToJsonFiles(data: Data[]): void {
        const languageKeyMap = objUtil.swapKeyValue(data[0]);
        const languages = Object.values(data[0])
            .filter(Boolean) as string[];

        const result: Result = languages.reduce((acc, lang) => ({ ...acc,
            [lang]: {} }), {});
        const pathContext: KeyPathContext = {
            pathStack: [],
        };

        data.slice(1)
            .forEach((row) => {
                const keyColumns = this.detectKeyColumns(row, languageKeyMap);
                const path = this.buildDynamicPath(row, keyColumns, pathContext);

                languages.forEach((lang) => {
                    const message = row[languageKeyMap[lang]];
                    if (!message || typeof message !== 'string') {
                        return;
                    }

                    const messageObj = this.createKeyStructure();
                    this.assignValue(messageObj, path, message);
                    this.deepMerge(result[lang], messageObj);
                });
            });

        const files: string[] = [];
        Object.entries(result)
            .forEach(([lang, data]) => {
                const filePath = path.join(this.options.exportPath, `lang_${lang}.json`);
                files.push(filePath);
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            });

        console.log('Created files:');
        console.log(files);
    }

    /**
     * Main Process
     * @returns promise
     */
    public async convert(): Promise<{ success: boolean;
        message: string; }> {
        try {
            if (!fs.existsSync(this.options.importPath)) {
                return {
                    success: false,
                    message: `Input file not found at: ${this.options.importPath}`,
                };
            }

            fs.mkdir(this.options.exportPath, () => ({
                success: false,
                message: `Excel data converted fail with export directory: ${this.options.exportPath}`,
            }));

            const excelData = this.readExcelFile();
            this.saveToJsonFiles(excelData);

            return {
                success: true,
                message: `Excel data successfully converted to JSON files in: ${this.options.exportPath}`,
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            return {
                success: false,
                message: `Error during conversion: ${errorMessage}`,
            };
        }
    }
}
