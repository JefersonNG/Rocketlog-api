import type { Config } from "jest";

const config: Config = {
  clearMocks: true,

  coverageProvider: "v8",

  testEnvironment: "node",

  testMatch: ["<rootDir>/src/**/*.test.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
};

export default config;
