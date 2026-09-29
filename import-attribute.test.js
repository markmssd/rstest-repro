import { expect, it, rs } from '@rstest/core';
import { answer } from 'tla-pkg';
import * as actual from 'tla-pkg' with { rstest: 'importActual' };

rs.mock('tla-pkg', () => ({ ...actual, extra: true }));

it("works in a mock factory that spreads `with { rstest: 'importActual' }`", () => {
  expect(answer()).toBe(42);
});
