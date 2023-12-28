const SevenBoom = require('./sevenBoom'); // Substitua pelo caminho correto do arquivo onde está a função

describe('SevenBoom', () => {
  test('Deve retornar true se o número 7 estiver presente em algum elemento do array', () => {
    expect(SevenBoom([1, 2, 3, 4, 5, 6, 7])).toBe(true);
    expect(SevenBoom([7, 14, 21])).toBe(true);
    expect(SevenBoom([8, 76, 22])).toBe(true);
    expect(SevenBoom([17, 27, 37])).toBe(true);
  });

  test('Deve retornar false se o número 7 não estiver presente em nenhum elemento do array', () => {
    expect(SevenBoom([1, 2, 3, 4, 5, 6])).toBe(false);
    expect(SevenBoom([8, 15, 23])).toBe(false);
    expect(SevenBoom([0, 11, 20])).toBe(false);
    expect(SevenBoom([25, 32, 48])).toBe(false);
  });

  test('Deve lançar um erro se o parâmetro não for um array', () => {
    expect(() => {
      SevenBoom("não sou um array");
    }).toThrowError("O parâmetro não é um array.");
    
    expect(() => {
      SevenBoom(123); // Teste com um número em vez de um array
    }).toThrowError("O parâmetro não é um array.");

    expect(() => {
      SevenBoom({ key: 'value' }); // Teste com um objeto em vez de um array
    }).toThrowError("O parâmetro não é um array.");
  });

  test('Deve retornar false se o array estiver vazio', () => {
    expect(SevenBoom([])).toBe(false);
  });

  test('Deve lidar com números negativos corretamente', () => {
    expect(SevenBoom([-7, -17, -27])).toBe(true);
    expect(SevenBoom([-5, -15, -25])).toBe(false);
  });

  test('Deve lidar com números decimais corretamente', () => {
    expect(SevenBoom([3.14, 6.28, 0.7])).toBe(true);
    expect(SevenBoom([1.5, 2.3, 4.8])).toBe(false);
  });
});
