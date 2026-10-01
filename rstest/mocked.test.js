import * as greeting from '../greeting';

rs.mock('../greeting', () => ({ ...rs.requireActual('../greeting') }));

it('spies on an export of a module mocked with a factory', () => {
  rs.spyOn(greeting, 'greet').mockReturnValue('spied');

  expect(greeting.greet()).toBe('spied');
});
