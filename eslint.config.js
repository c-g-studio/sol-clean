import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'public/pdf/**' // ігнор pdf.worker.min.mjs
    ]
  }
];
