import { value } from './dep';

vi.mock('./dep', () => ({ value: vi.fn().mockReturnValue('from factory') }));

it('6. keeps mockReturnValue set in a mock factory', () => {
  expect(value()).toBe('from factory');
});
