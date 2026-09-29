import { value } from './dep';

rs.mock('./dep', () => ({ value: rs.fn().mockReturnValue('from factory') }));

it('6. keeps mockReturnValue set in a mock factory', () => {
  expect(value()).toBe('from factory');
});
