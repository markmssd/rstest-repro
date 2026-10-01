import * as greeting from '../greeting';

vi.mock('../greeting', async (importOriginal) => ({ ...(await importOriginal()) }));

it('spies on an export of a module mocked with a factory', () => {
  vi.spyOn(greeting, 'greet').mockReturnValue('spied');

  expect(greeting.greet()).toBe('spied');
});
