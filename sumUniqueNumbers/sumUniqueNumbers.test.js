const SumUniqueNumbers = require('./sumUniqueNumbers');

describe('SumUniqueNumbers function', () => {
  test('it should return an object with arrays and sum of unique numbers', () => {
    const result = SumUniqueNumbers([4, 5, 4, 6, 6, 7, 5, 8, 9, 9]);
    expect(result).toEqual({
      initialArr: [4, 5, 4, 6, 6, 7, 5, 8, 9, 9],
      orderedArr: [4, 4, 5, 5, 6, 6, 7, 8, 9, 9],
      uniqueNumsArr: [7, 8],
      sumUniqueNums: 15,
    });
  });

  test('it should throw an error for non-numeric elements in the array', () => {
    expect(() => {
      SumUniqueNumbers([1, 2, 'three', 4]);
    }).toThrow('O array informado contém elementos não numéricos.');
  });

  test('it should throw an error for non-array inputs', () => {
    expect(() => {
      SumUniqueNumbers('hello');
    }).toThrow('O parâmetro não é um array.');
  });
});
