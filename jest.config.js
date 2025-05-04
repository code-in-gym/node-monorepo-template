const { defaults } = require('jest-config');

module.exports = {
  // preset: 'jest-expo/web',
  coverageProvider: 'v8',
  // testEnvironment: 'jest-environment-node',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest-setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { diagnostics: { warnOnly: true } }],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  reporters: [
    'default',
    ['jest-html-reporter', { pageTitle: 'Jest UnitTest Report' }],
  ],
};
