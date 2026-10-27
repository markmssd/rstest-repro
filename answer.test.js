import './answer.mock.module.js';
import { answer } from './answer.js';

test('applies the mock registered by the imported module', () => {
  expect(answer()).toBe('mocked');
});
