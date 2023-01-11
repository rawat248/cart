module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',

  ],
  rules: {
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-tabs': 0,
    'no-param-reassign': 0,

  },
};
