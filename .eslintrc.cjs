module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:astro/recommended'],
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
  ],
  ignorePatterns: ['dist', '.astro', 'node_modules'],
};
