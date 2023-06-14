import calculate from '../logic/calculate';

describe('calculate', () => {
  test('returns an empty object when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('updates "next" with a number when no operation is set', () => {
    const obj = { next: '5', total: null, operation: null };
    const result = calculate(obj, '2');
    expect(result).toEqual({ next: '52', total: null });
  });

  test('appends a number to "next" when an operation is set', () => {
    const obj = { next: '5', total: null, operation: '+' };
    const result = calculate(obj, '2');
    expect(result).toEqual({ next: '52', total: null, operation: '+' });
  });

  test('performs the operation when "next" and an operation are set', () => {
    const obj = { next: '5', total: '10', operation: 'x' };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '50', next: null, operation: null });
  });
});
