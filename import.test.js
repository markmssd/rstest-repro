import { expect, it } from '@rstest/core';
import { answer } from 'tla-pkg';

it('works with a plain import', () => {
  expect(answer()).toBe(42);
});
