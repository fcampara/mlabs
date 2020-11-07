module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'react/prop-types': 'off'
  }
}
