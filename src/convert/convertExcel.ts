import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export interface Data {
    [key: string]: any;
};

/** I/O file path options */
export interface PathOptions {
    importPath: string;
    exportPath: string;
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
     * @returns 
     */
    private readExcelFile(): Data[] {
        // Excel file
        const dataFile = xlsx.readFile(this.options.importPath);
        
        // First Excel sheet
        const sheetName = dataFile.SheetNames[0];
        const worksheet = dataFile.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet) as Data[];

        console.log('Read Data');
        console.log(data);
        
        return data;
    }

    /**
     * Extract language message json file
     * @param data JSON data
     */
    private saveToJsonFiles(data: Data): void {
        for (const key in data) {
          const jsonString = JSON.stringify(data[key], null, 2);
          const filePath = path.join(this.options.exportPath, `${key}.json`);
          fs.writeFileSync(filePath, jsonString);
          console.log(`Created file: ${filePath}`);
        }
        
        fs.writeFileSync(
          path.join(this.options.exportPath, "all.json"), 
          JSON.stringify(data, null, 2)
        );
        console.log(`Created file: ${path.join(this.options.exportPath, "all.json")}`);
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