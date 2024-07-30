module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./'],
    collectCoverageFrom: ['./**/*.{ts,tsx}'],
    coverageDirectory: './coverage',
    testMatch: ['./**/*.test.(ts|tsx|js)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };