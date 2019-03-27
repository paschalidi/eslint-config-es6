module.exports = {
  "parser": require.resolve("babel-eslint"),
  "extends": ["airbnb-base", "prettier"].map(require.resolve),
  "plugins": ["prettier"].map(require.resolve),
  "rules": {
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "prettier/prettier": ["error"]
  },
  "globals": {
    "window": false,
    "document": false,
    "it": false,
    "describe": false,
    "expect": false,
    "beforeEach": false,
    "before": false,
    "afterEach": false,
    "afterAll": false,
    "btoa": false,
    "atob": false
  }
};