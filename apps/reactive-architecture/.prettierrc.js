module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',

  printWidth: 120,
  proseWrap: 'preserve',
  semi: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: '**/*.html',
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
        singleQuote: true,
      },
    },
  ],
};
