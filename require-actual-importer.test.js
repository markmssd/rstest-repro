import { expect, it, rs } from '@rstest/core';

it('works with rs.requireActual of a local module that re-exports it', () => {
  expect(rs.requireActual('./reexport.js').answer()).toBe(42);
});
