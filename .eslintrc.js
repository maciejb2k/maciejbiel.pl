module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "google",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "sourceType": "module",
    },
    "rules": {
        "max-len": ["error", {"code": 300, "ignoreComments": true, "ignoreTemplateLiterals": true, "ignoreStrings": true}],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "brace-style": ["error", "stroustrup"],
        "linebreak-style": 0,
        "no-tabs": 0,
        "no-invalid-this": "off",
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": false
            }
        }],
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
}