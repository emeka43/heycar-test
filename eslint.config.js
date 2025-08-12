import globals from "globals";


export default [
  { files: ["**/*.{js,ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];