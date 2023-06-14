import operate from '../logic/operate';

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(operate(2, 2, '+')).toBe('4');
    expect(operate(5, 5, '+')).toBe('10');
  });
});

});
