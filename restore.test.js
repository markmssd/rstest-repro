const mocker = globalThis.rs ?? globalThis.vi ?? jest;

const service = { name: () => 'real' };
const configured = mocker.fn().mockReturnValue('configured');
const withImplementation = mocker.fn(() => 'implementation');

describe('restoreMocks: true', () => {
  it('1. spies on a method', () => {
    mocker.spyOn(service, 'name').mockReturnValue('spied');
    configured();

    expect(service.name()).toBe('spied');
  });

  it('2. restores the spy', () => {
    expect(service.name()).toBe('real');
  });

  it('3. keeps mockReturnValue on a mock function', () => {
    expect(configured()).toBe('configured');
  });

  it('4. keeps the implementation passed to fn()', () => {
    expect(withImplementation()).toBe('implementation');
  });

  it('5. keeps call history of a mock function', () => {
    expect(configured).toHaveBeenCalled();
  });
});
