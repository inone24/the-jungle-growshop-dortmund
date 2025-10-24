/* eslint-disable @typescript-eslint/no-require-imports */
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  {
    ignores: ['.astro/**']
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended',
      'eslint-config-prettier'
    ],
    env: { browser: true, es2022: true, node: true },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'astro'],
    overrides: [
      {
        files: ['**/*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: { parser: '@typescript-eslint/parser' }
      }
    ],
    rules: {
      'no-console': 'warn'
    }
  })
];
