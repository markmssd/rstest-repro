const order = [];

afterEach(() => {
  order.push('first');
});

afterEach(() => {
  order.push('second');
});

test('records the order', () => {});

test('ran the afterEach hooks in declaration order', () => {
  expect(order).toEqual(['first', 'second']);
});
