import { defineConfig } from '@rstest/core';

export default defineConfig({
  globals: true,
  restoreMocks: true,
  include: ['restore.test.js', 'factory/rstest.test.js'],
});
