import typescriptEslint from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';
import typescriptParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';

export default [
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.nuxt/**',
            '**/coverage/**',
        ],
    },
    {
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: typescriptParser,
                ecmaVersion: 2022,
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
            '@stylistic': stylistic,
            vue,
        },
        rules: {
            'no-console': 'off',
            '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
            '@stylistic/template-curly-spacing': ['error', 'never'],
            'vue/no-template-shadow': ['error'],
            'vue/html-indent': ['error', 2],
            'vue/max-attributes-per-line': 'off',
            'vue/require-default-prop': 'off',
            'vue/require-v-for-key': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/no-unused-components': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'eqeqeq': ['error', 'always'],
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': 'allow-with-description',
                    'ts-nocheck': 'allow-with-description',
                    'ts-check': 'allow-with-description',
                },
            ],
            'vue/attribute-hyphenation': ['error', 'always', {
                ignore: [],
            }],
            'prefer-const': 'error',
            'no-var': 'error',
            'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
            'eol-last': ['error', 'always'],
        },
    },
];
