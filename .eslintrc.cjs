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
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier',
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
