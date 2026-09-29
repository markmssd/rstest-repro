import { defineConfig } from '@rstest/core';

export default defineConfig({
  globals: true,
  include: ['rstest/*.test.js'],
});
