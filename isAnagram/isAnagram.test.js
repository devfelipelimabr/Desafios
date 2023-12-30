const IsAnagram = require('./isAnagram');

describe('IsAnagram function', () => {
  test('it should return true for valid anagrams', () => {
    expect(IsAnagram('listen', 'silent')).toBe(true);
  });

  test('it should return false for non-anagrams', () => {
    expect(IsAnagram('hello', 'world')).toBe(false);
  });

  test('it should throw an error for non-string inputs', () => {
    expect(() => {
      IsAnagram(123, 'hello');
    }).toThrow('Valores inseridos inválidos.');
  });

  test('it should handle spaces in the input strings', () => {
    expect(IsAnagram('debit card', 'bad credit')).toBe(true);
  });

  test('it should ignore case sensitivity', () => {
    expect(IsAnagram('LISTEN', 'silent')).toBe(true);
  });

  test('it should return true for empty strings', () => {
    expect(IsAnagram('', '')).toBe(true);
  });

  test('it should return false for different length strings', () => {
    expect(IsAnagram('hello', 'helloo')).toBe(false);
  });
});
