const IsPerfectNumber = require('./isPerfectNumber');

describe('IsPerfectNumber', () => {
    test('Verifica se 28 é um número perfeito', () => {
        expect(IsPerfectNumber(28)).toBe(true);
    });

    test('Verifica se 6 é um número perfeito', () => {
        expect(IsPerfectNumber(6)).toBe(true);
    });

    test('Verifica se 496 é um número perfeito', () => {
        expect(IsPerfectNumber(496)).toBe(true);
    });

    test('Verifica se 8128 é um número perfeito', () => {
        expect(IsPerfectNumber(8128)).toBe(true);
    });

    test('Verifica se 27 não é um número perfeito', () => {
        expect(IsPerfectNumber(27)).toBe(false);
    });

    test('Verifica se 1 não é um número perfeito', () => {
        expect(IsPerfectNumber(1)).toBe(false);
    });

    test('Verifica se um número negativo não é um número perfeito', () => {
        expect(() => IsPerfectNumber(-28)).toThrow();
    });

    test('Verifica se um número não inteiro não é um número perfeito', () => {
        expect(() => IsPerfectNumber(28.5)).toThrow();
    });
});
