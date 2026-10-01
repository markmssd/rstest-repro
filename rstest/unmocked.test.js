import * as greeting from '../greeting';

it('spies on an export of a module that is not mocked', () => {
  rs.spyOn(greeting, 'greet').mockReturnValue('spied');

  expect(greeting.greet()).toBe('spied');
});
