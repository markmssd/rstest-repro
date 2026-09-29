function add(a, b) {
  return a + b;
}

describe(add, () => {
  it('names the suite after the function', () => {
    expect(expect.getState().currentTestName).toMatch(/^add\b/);
  });
});
