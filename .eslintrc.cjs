/** @type {import('estlint').Linter.Config} */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', // ESLintの推奨ルールセット
    'plugin:react/recommended', // Reactに関する推奨ルールセット
    'plugin:@typescript-eslint/recommended', // TypeScriptに関する推奨ルールセット
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier', // eslint-config-pretteirを利用すると、衝突するルールや不要なルールを停止し、コードの書式に関する整形は全てPrettierで行うことができる
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  plugins: ['@typescript-eslint', 'import', 'jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
  globals: {},
  rules: {
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'jest/valid-title': 'off',
  },
};
