import { ExcelToJson, PathOptions } from './convert/convertExcel';

// interface
export {
    ExcelToJson,
    PathOptions,
};

// function
export async function convertExcelToJson(options: PathOptions): Promise<{ success: boolean; message: string }> {
    const converter = new ExcelToJson(options);
    return await converter.convert();
}
