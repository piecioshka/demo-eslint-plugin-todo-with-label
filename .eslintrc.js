module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ["todo-with-label"],
  rules: {
    "todo-with-label/has-valid-pattern": "error",
  },
};
