module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8
  }
};
