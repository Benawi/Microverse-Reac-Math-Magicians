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
 

 
});
