const SexagenaryChineseCycle = require('./sexageraryCycle');

describe('SexagenaryChineseCycle', () => {
  test('Retorna o último elemento do ciclo sexagenário para um ano dentro do intervalo permitido', () => {
    expect(SexagenaryChineseCycle(2023)).toEqual(['water', 'rabbit']);
    expect(SexagenaryChineseCycle(2000)).toEqual(['metal', 'dragon']);
    // Adicione mais casos de teste conforme necessário
  });

  test('Lança um erro ao passar um ano fora do intervalo permitido', () => {
    expect(() => {
      SexagenaryChineseCycle(-3000);
    }).toThrow('Ano inserido fora do range aceitável');

    expect(() => {
      SexagenaryChineseCycle(6000);
    }).toThrow('Ano inserido fora do range aceitável');
    // Adicione mais casos de teste conforme necessário
  });

  test('Lança um erro ao passar um tipo de entrada diferente de um número', () => {
    expect(() => {
      SexagenaryChineseCycle('2023');
    }).toThrow('Não foi informado um número válido');

    expect(() => {
      SexagenaryChineseCycle(null);
    }).toThrow('Não foi informado um número válido');
    // Adicione mais casos de teste conforme necessário
  });
});
