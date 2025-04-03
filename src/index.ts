import type { PathOptions } from './converter/convert/convertExcel';
import { ExcelToJson } from './converter/convert/convertExcel';
import i18nExcelJsonConverter from './vite-plugin-core';

// interface
export {
    ExcelToJson,
    PathOptions,
    i18nExcelJsonConverter,
};

// function
export async function convertExcelToJson(options: PathOptions): Promise<{ success: boolean;
    message: string; }> {
    const converter = new ExcelToJson(options);
    return await converter.convert();
}
