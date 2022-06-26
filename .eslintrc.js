// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  // required to lint *.vue files
  plugins: ["vue"],
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/essential` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/strongly-recommended"],
  // add your custom rules here
  rules: {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": 0,
    "vue/attribute-hyphenation": 0,
    "vue/no-unused-vars": "off",
    "vue/no-unused-components": "off",
  },
};
