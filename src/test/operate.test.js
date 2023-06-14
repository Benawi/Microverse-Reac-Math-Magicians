import operate from '../logic/operate';

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(operate(2, 2, '+')).toBe('4');
    expect(operate(5, 5, '+')).toBe('10');
  });
});

describe('subtract', () => {
  test('subtracts two numbers correctly', () => {
    expect(operate(5, 3, '-')).toBe('2');
    expect(operate(1, 1, '-')).toBe('0');
  });
});

