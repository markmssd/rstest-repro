const createMock = globalThis.rs?.fn ?? jest.fn;

// A matcher that inspects this object fails the test.
const value = {
  get secret() {
    throw new Error('A passing assertion read this getter');
  },
};

it('toHaveBeenCalledWith does not inspect its arguments when it passes', () => {
  const mock = createMock();

  mock(value);

  expect(mock).toHaveBeenCalledWith(value);
});

it('toContain does not inspect its arguments when it passes', () => {
  expect([value]).toContain(value);
});
