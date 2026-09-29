rs.mockRequire('../answer.cjs', () => ({ answer: () => 42 }));

it('rs.mockRequire + require', () => {
  expect(require('../answer.cjs').answer()).toBe(42);
});
