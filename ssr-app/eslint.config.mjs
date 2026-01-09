import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import next from '@next/eslint-plugin-next';
import reactCompiler from 'eslint-plugin-react-compiler';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'coverage/**', 'components/ui/**', 'src/shared/ui/**', 'next-env.d.ts'],
  },

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      prettier,
      next.configs['core-web-vitals'],
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      react,
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      ...reactHooks.configs.recommended.rules,

      'react-compiler/react-compiler': 'error',

      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],

      'react/jsx-no-leaked-render': [
        'error',
        { validStrategies: ['coerce', 'ternary'] },
      ],

      // 'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'padding-line-between-statements': 'off',
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: ['if', 'try', 'switch', 'for', 'while', 'do'] },
        { blankLine: 'always', prev: ['if', 'try', 'switch', 'for', 'while', 'do'], next: '*' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: 'export' },
      ],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^next', '^[a-z]'],
            ['^@/shared'],
            ['^@/entities', '^@/features', '^@/widgets', '^@/pages'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\./?$', '^\\.\\./'],
            ['^.+\\.(css|scss|sass|less)$', '^.+\\.(png|jpg|svg)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },

  {
    files: ['app/**/*.{ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off',

      'no-restricted-globals': [
        'error',
        {
          name: 'window',
          message:
            'Client API (window) is not available in Server Components. Use .client.tsx or "use client".',
        },
        {
          name: 'document',
          message:
            'Client API (document) is not available in Server Components.',
        },
        {
          name: 'navigator',
          message:
            'Client API (navigator) is not available in Server Components.',
        },
      ],
    },
  },

  {
    files: ['**/*.client.{ts,tsx}', '**/client/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'no-restricted-globals': 'off',
    },
  },

  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  {
    files: ['**/*.config.{js,mjs,ts}', 'scripts/**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-console': 'off',
    },
  },
);
