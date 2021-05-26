module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "react-app",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "no-console": "off",
    "no-use-before-define": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-danger": "off",
    "react/require-default-props": "off",
    "react/default-props-match-prop-types": "off",
    "react/no-unused-prop-types": "off",
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
