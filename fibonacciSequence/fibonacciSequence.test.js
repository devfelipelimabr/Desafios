const FibonacciSequence = require('./fibonacciSequence');

describe('FibonacciSequence function', () => {
  test('it should return the correct Fibonacci sequence', () => {
    expect(FibonacciSequence(1)).toEqual([0, 1]);
    expect(FibonacciSequence(2)).toEqual([0, 1]);
    expect(FibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    expect(FibonacciSequence(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('it should throw an error for invalid inputs', () => {
    expect(() => {
      FibonacciSequence('hello');
    }).toThrow('Número inserido inválido.');

    expect(() => {
      FibonacciSequence(0);
    }).toThrow('Número inserido inválido.');

    expect(() => {
      FibonacciSequence(2 ** 27);
    }).toThrow('Número inserido inválido.');
  });
});
