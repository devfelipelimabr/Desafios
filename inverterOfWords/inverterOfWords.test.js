const InverterOfWords = require('./inverterOfWords');

describe('InverterOfWords function', () => {
  test('it should reverse words in a string', () => {
    expect(InverterOfWords('Hello world')).toBe('olleH dlrow');
    expect(InverterOfWords('Testing some strings')).toBe('gnitseT emos sgnirts');
  });

  test('it should throw an error for non-string inputs', () => {
    expect(() => {
      InverterOfWords(123);
    }).toThrow('O valor inserido não é uma string.');

    expect(() => {
      InverterOfWords(['Hello', 'world']);
    }).toThrow('O valor inserido não é uma string.');
  });

  test('it should handle empty string input', () => {
    expect(InverterOfWords('')).toBe('');
  });
});
