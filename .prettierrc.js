/** @type {import('prettier')} */

module.exports = {
  printWidth: 120,
  semi: true,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  overrides: [
    {
      files: ['**/*.css', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
