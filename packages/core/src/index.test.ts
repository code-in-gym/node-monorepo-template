import { greet } from './index';

describe('greet', () => {
  it('should greet the user', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});
