import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "!src/**/*.test.ts",
    "!src/**/*.spec.ts",
    "!src/types/**",
  ],

  outDir: "build",
  format: ["esm"],
  target: "es2024",
  platform: "node",

  bundle: false,
  clean: true,
});
