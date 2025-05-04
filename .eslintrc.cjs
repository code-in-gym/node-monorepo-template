const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'unicorn'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      isDevelopment ? 'warn' : 'error',
      { argsIgnorePattern: '^_' },
    ],
    // '@typescript-eslint/no-floating-promises': 'error', // 需要 parserOptions.project
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.test.ts'],
      env: { jest: true },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
