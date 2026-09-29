import { expect, it, rs } from '@rstest/core';

it('works with rs.requireActual', () => {
  expect(rs.requireActual('tla-pkg').answer()).toBe(42);
});
