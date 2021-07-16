module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": "off",
    "jsx-a11y/no-autofocus": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
    "max-len": ["warn", { "code": 120 }]
  },
};
