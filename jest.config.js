/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "^~root(.*)$": "<rootDir>/src$1",
    "^~core(.*)$": "<rootDir>/src/core$1",
    "^~configs(.*)$": "<rootDir>/src/configs$1",
    "^~layouts(.*)$": "<rootDir>/src/layouts$1",
    "^~redux(.*)$": "<rootDir>/src/redux$1",
    "^~services(.*)$": "<rootDir>/src/services$1",
    "^~utils(.*)$": "<rootDir>/src/utils$1",
    "^~test-utils": "<rootDir>/src/tests/utils.tsx",
    "^~routes": "<rootDir>/src/routes.tsx",
  },
};
