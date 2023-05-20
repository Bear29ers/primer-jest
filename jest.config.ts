export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'jest-report.xml' }]],
  collectCoverage: true,
  coverageReporters: ['text-summary', 'html'],
  coverageDirectory: 'reports/coverage',
  // コードカバレッジの閾値の設定
  // coverageThreshold: {
  //   global: { // 共通で閾値を適用
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //     statements: 50,
  //   },
  //   './src/components/': { // ディレクトリに閾値を適用
  //     lines: 50,
  //   },
  //   './src/reducers/**/*.js': { // ディレクトリの特定のファイルに閾値を適用
  //     lines: 60,
  //   },
  //   './src/api/ver-important-module.js': { // 特定のファイルに閾値を適用
  //     lines: 100,
  //   },
};
