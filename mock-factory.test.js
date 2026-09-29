import { expect, it, rs } from '@rstest/core';
import { answer } from 'tla-pkg';

rs.mock('tla-pkg', () => ({ ...rs.requireActual('tla-pkg'), extra: true }));

it('works in a mock factory that spreads rs.requireActual', () => {
  expect(answer()).toBe(42);
});
