jest.mock('../answer.cjs', () => ({ answer: () => 42 }));

it('jest.mock + require', () => {
  expect(require('../answer.cjs').answer()).toBe(42);
});
