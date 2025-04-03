import type { Vitei18nExcelJsonOptions } from './options';
import { Plugin } from 'vite';

/**
 * Vite plugin definition
 * @param options import, export file options
 * @returns process
 */
export default function i18nExcelJsonConverter(options: Vitei18nExcelJsonOptions): Plugin {
    return {
        name: 'i18n-excel-json-converter-plugin',
        buildStart() {
            console.log('start logic');
            console.log(options);
        },
    };
}
