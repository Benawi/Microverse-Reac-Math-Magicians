import calculate from '../logic/calculate';

describe('calculate', () => {
  test('returns an empty object when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

 

 
});
