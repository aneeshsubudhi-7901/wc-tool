/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/test/__tests__/**/*.test.ts",
    "**/test/integration/**/*.test.ts",
    "**/test/unit/**/*.test.ts",
  ],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  // Ignore compiled files
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
