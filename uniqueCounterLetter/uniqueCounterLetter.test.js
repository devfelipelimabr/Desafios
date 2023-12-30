const UniqueCounterLetter = require('./uniqueCounterLetter');

describe('UniqueCounterLetter function', () => {
    test('Retorna um array de letras únicas de uma string', () => {
        const input = 'Hello, World!';
        const expectedOutput = ['H', 'e', 'l', 'o', 'W', 'r', 'd'];

        expect(UniqueCounterLetter(input)).toEqual(expectedOutput);
    });

    test('Lida corretamente com strings vazias', () => {
        const input = '';
        const expectedOutput = [];

        expect(UniqueCounterLetter(input)).toEqual(expectedOutput);
    });

    test('Lida corretamente com strings sem letras', () => {
        const input = '1234567890';
        const expectedOutput = [];

        expect(UniqueCounterLetter(input)).toEqual(expectedOutput);
    });

    test('Lança um erro para entrada de dados inválida', () => {
        const input = 123; // Entrada inválida (não é uma string)

        expect(() => {
            UniqueCounterLetter(input);
        }).toThrow('Entrada de dados inválida.');
    });
});
