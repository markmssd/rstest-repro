import { defineConfig } from '@rstest/core';

export default defineConfig({
  globals: true,
  tools: {
    rspack: { optimization: { sideEffects: false } },
  },
});
