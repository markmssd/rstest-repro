const { value } = require('./dep');

jest.mock('./dep', () => ({ value: jest.fn().mockReturnValue('from factory') }));

it('6. keeps mockReturnValue set in a mock factory', () => {
  expect(value()).toBe('from factory');
});
