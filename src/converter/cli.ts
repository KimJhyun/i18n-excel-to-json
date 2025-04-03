import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import figlet from 'figlet';
import { convertExcelToJson } from '../index';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const program = new Command();
program
    .name('excel-to-json')
    .description('Convert Excel files to JSON with customizable key field')
    .version('1.0.0');

// Command definition
program
    .option('-i, --input <path>', 'Path to the input Excel file')
    .option('-o, --output <directory>', 'Directory to save JSON files')
    .option('-e, --env <path>', 'Path to .env file')
    .parse(process.argv);

/**
 * CLI main process method
 */
async function main() {
    try {
        console.log(figlet.textSync('i18n Ecxel-JSON Converter'));
        console.log(process.argv);

        const options = program.opts();

        if (options.env) {
            dotenv.config({ path: options.env });
        }

        const importPath = options.input
        || process.env.EXCEL_INPUT_PATH
        || path.join(process.cwd(), 'input.xlsx');

        const exportPath = options.output
        || process.env.EXCEL_OUTPUT_DIR
        || path.join(process.cwd(), 'output');

        if (!fs.existsSync(importPath)) {
            console.error(`Error: Input file not found at ${importPath}`);
            process.exit(1);
        }

        console.log(`Processing Excel file: ${importPath}`);
        console.log(`Output directory: ${exportPath}`);

        const result = await convertExcelToJson({
            importPath,
            exportPath,
        });

        if (result.success) {
            console.log(`\n✅ ${result.message}`);
        } else {
            console.error(`\n❌ ${result.message}`);
            process.exit(1);
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        process.exit(1);
    }

    process.exit(0);
}

if (require.main === module) {
    main();
}
