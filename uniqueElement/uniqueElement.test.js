const UniqueElement = require('./uniqueElement');

describe('UniqueElement function', () => {
  test('it should return an array with unique elements', () => {
    expect(UniqueElement([1, 2, 2, 3, 4, 4])).toEqual([1, 3]);
    expect(UniqueElement(['a', 'b', 'b', 'c', 'd', 'd'])).toEqual(['a', 'c']);
  });

  test('it should return an empty array for no unique elements', () => {
    expect(UniqueElement([1, 1, 2, 2, 3, 3])).toEqual([]);
    expect(UniqueElement(['a', 'a', 'b', 'b', 'c', 'c'])).toEqual([]);
  });

  test('it should handle strings and return unique words', () => {
    expect(UniqueElement('hello hello world')).toEqual(['world']);
    expect(UniqueElement('a b c c d d e')).toEqual(['a', 'b', 'e']);
  });

  test('it should throw an error for non-array inputs', () => {
    expect(() => {
      UniqueElement(false);
    }).toThrow('O parâmetro inserido não é um array.');

    expect(() => {
      UniqueElement(123);
    }).toThrow('O parâmetro inserido não é um array.');
  });
});
