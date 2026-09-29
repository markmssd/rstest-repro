import { defineConfig } from '@rstest/core';

export default defineConfig({
  globals: true,
  include: ['rstest/mock.test.js', 'extra/esm.test.js'],
});
