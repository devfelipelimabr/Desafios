const IsPerfectNumber = require('./isPerfectNumber');

describe('IsPerfectNumber function', () => {
    test('it should return true for perfect numbers', () => {
        expect(IsPerfectNumber(6)).toBe(true);
        expect(IsPerfectNumber(28)).toBe(true);
        expect(IsPerfectNumber(496)).toBe(true);
        expect(IsPerfectNumber(8128)).toBe(true);
    });

    test('it should return false for non-perfect numbers', () => {
        expect(IsPerfectNumber(10)).toBe(false);
        expect(IsPerfectNumber(27)).toBe(false);
        expect(IsPerfectNumber(100)).toBe(false);
    });

    test('it should throw an error for non-integer or zero inputs', () => {
        expect(() => {
            IsPerfectNumber(1.5);
        }).toThrow('O número é não inteiro e/ou menor/igual a zero');

        expect(() => {
            IsPerfectNumber(0);
        }).toThrow('O número é não inteiro e/ou menor/igual a zero');

        expect(() => {
            IsPerfectNumber(-6);
        }).toThrow('O número é não inteiro e/ou menor/igual a zero');
    });
});
