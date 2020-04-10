module.exports = {
  testRegex: '.(test|spec).ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/run.ts'],
  testEnvironment: 'node',
  resetMocks: true,
  coverageReporters: ['json-summary', 'text'],
};
