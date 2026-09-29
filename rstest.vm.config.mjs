import { defineConfig } from '@rstest/core';

export default defineConfig({
  globals: true,
  pool: 'vmThreads',
});
