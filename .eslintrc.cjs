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
    'react': {
      version: '18.2.0',
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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default-member': 'off',
    'jest/valid-title': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/expect-expect': 'off',
    'jest/no-commented-out-tests': 'off',
  },
};
