module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never' },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
  },
};
