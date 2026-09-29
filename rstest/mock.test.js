rs.mock('../answer.cjs', () => ({ answer: () => 42 }));

it('rs.mock + require', () => {
  expect(require('../answer.cjs').answer()).toBe(42);
});
