const FindPrimeNumbers = require('./findPrimeNumbers');

describe('FindPrimeNumbers function', () => {
  test('it should return prime numbers within the range', () => {
    expect(FindPrimeNumbers(1, 10)).toEqual([2, 3, 5, 7]);
    expect(FindPrimeNumbers(10, 20)).toEqual([11, 13, 17, 19]);
    expect(FindPrimeNumbers(20, 30)).toEqual([23, 29]);
  });

  test('it should handle large ranges', () => {
    // Adjust this test case based on your environment limitations
    const largeRange = 2 ** 26; // For example, limiting to 2^14 due to time or memory constraints
    expect(() => {
      FindPrimeNumbers(1, largeRange);
    }).not.toThrow('Range muito alto.');
  });

  test('it should throw an error for invalid input types', () => {
    expect(() => {
      FindPrimeNumbers('start', 10);
    }).toThrow('Tipo de entradas inválidos.');

    expect(() => {
      FindPrimeNumbers(1, 'end');
    }).toThrow('Tipo de entradas inválidos.');
  });

  test('it should throw an error for start less than 1', () => {
    expect(() => {
      FindPrimeNumbers(0, 10);
    }).toThrow('O ínicio deve ser maior ou igual a 1.');

    expect(() => {
      FindPrimeNumbers(-5, 10);
    }).toThrow('O ínicio deve ser maior ou igual a 1.');
  });

  test('it should throw an error for a range that is too high', () => {
    expect(() => {
      FindPrimeNumbers(1, 2 ** 27);
    }).toThrow('Range muito alto.');
  });
});
