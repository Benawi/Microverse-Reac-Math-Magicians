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

describe('multiply', () => {
  test('multiply two numbers correctly', () => {
    expect(operate(5, 3, 'x')).toBe('15');
    expect(operate(2, 1, 'x')).toBe('2');
  });
});

describe('divide', () => {
  test('divide two numbers correctly', () => {
    expect(operate(5, 5, '÷')).toBe('1');
    expect(operate(10, 5, '÷')).toBe('2');
  });
});
