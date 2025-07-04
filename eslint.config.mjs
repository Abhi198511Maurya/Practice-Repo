import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: [
      "node_modules/*",
      "code/*",
      ".husky/*",
      "eslint.config.mjs",   // optional: ignore config files
    ],
    plugins: { js },
    extends: ["js/recommended"],
    rules: { "no-unused-vars": "off", camelcase: "warn" }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
]);
