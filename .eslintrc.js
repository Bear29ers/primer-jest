module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
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
  },
};
