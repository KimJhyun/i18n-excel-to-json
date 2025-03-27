import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

import jsRules from './eslint.config.javascript';
import tsRules from './eslint.config.typescript';
import stylisticRules from './eslint.config.stylistic';
import styleisticPreset from './eslint.config.stylistic.custompreset';

/**
 * ESLint 설정
 * @see {@link https://eslint.org}
 */
export default [
    ...tseslint.config(
        eslint.configs.recommended,
        tseslint.configs.recommended,
        {
            name: 'config/files',
            files: ['**/*.{ts,mts,tsx,vue}'],
        },
        {
            name: 'config/ignores',
            ignores: [
                '**/dist/**',
                '**/coverage/**',
                '**/html/**',
                '**/cache/**',
            ],
        },
        jsRules,
        tsRules,
    ),
    stylistic.configs.customize(styleisticPreset),
    stylisticRules,
];
