import { ExcelToJson, PathOptions, Data } from './convert/convertExcel';

// interface
export {
    ExcelToJson,
    PathOptions,
    Data
};

// function
export async function convertExcelToJson(options: PathOptions): Promise<{ success: boolean; message: string }> {
    const converter = new ExcelToJson(options);
    return await converter.convert();
}
