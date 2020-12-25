module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["google", "plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "max-len": [
      "error",
      {
        code: 80,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "brace-style": ["error", "stroustrup"],
    "linebreak-style": 0,
    "no-tabs": 0,
    "no-invalid-this": "off",
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
        },
      },
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
