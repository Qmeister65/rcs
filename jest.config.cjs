/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  roots: ['./src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.tsx', '!**/node_modules/**', '!**/vendor/**'],
  modulePaths: ['./src'],
  verbose: true,
};
