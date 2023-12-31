const MedianCalc = require('./medianCalc');

describe('MedianCalc function', () => {
    test('it should calculate median for even-length arrays', () => {
        expect(MedianCalc([1, 2, 3, 4], [5, 6, 7, 8])).toBe(4.5);
        expect(MedianCalc([10, 20, 30], [5, 15, 25])).toBe(17.5);
    });

    test('it should calculate median for odd-length arrays', () => {
        expect(MedianCalc([1, 2, 3], [4, 5])).toBe(3);
        expect(MedianCalc([10, 20, 30, 40, 50], [5, 15, 25, 35])).toBe(25);
    });

    test('it should throw an error for non-array inputs', () => {
        expect(() => {
            MedianCalc('hello', [1, 2, 3]);
        }).toThrow('O parâmetro não é um array.');

        expect(() => {
            MedianCalc([1, 2, 3], 5);
        }).toThrow('O parâmetro não é um array.');
    });

    test('it should throw an error for empty arrays', () => {
        expect(() => {
            MedianCalc([], [1, 2, 3]);
        }).toThrow('Sem valores fornecidos.');

        expect(() => {
            MedianCalc([1, 2, 3], []);
        }).toThrow('Sem valores fornecidos.');
    });

    test('it should throw an error for arrays with non-numeric elements', () => {
        expect(() => {
            MedianCalc([1, 2, 'hello'], [4, 5, 6]);
        }).toThrow('Os arrays contêm elementos não numéricos.');

        expect(() => {
            MedianCalc([10, 20, 30], [true, false]);
        }).toThrow('Os arrays contêm elementos não numéricos.');
    });
});
