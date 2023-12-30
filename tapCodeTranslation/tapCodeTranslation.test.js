const tapCode = require('./tapCodeTranslation'); // Substitua 'seuArquivo.js' pelo nome do arquivo que contém sua função

describe('tapCode', () => {
  test('Deve traduzir corretamente a palavra "greeting"', () => {
    expect(tapCode("greeting")).toEqual(".. .. .... .. . ..... . ..... .... .... .. .... ... ... .. ..");
  });

  test('Deve traduzir corretamente a palavra "confrontation"', () => {
    expect(tapCode("confrontation")).toEqual(". ... ... .... ... ... .. . .... .. ... .... ... ... .... .... . . .... .... .. .... ... .... ... ...");
  });

  test('Deve traduzir corretamente a palavra "leadership"', () => {
    expect(tapCode("leadership")).toEqual("... . . ..... . . . .... . ..... .... .. .... ... .. ... .. .... ... .....");
  });

  test('Deve traduzir corretamente a palavra "ankle"', () => {
    expect(tapCode("ankle")).toEqual(". . ... ... . ... ... . . .....");
  });

  test('Deve traduzir corretamente a palavra "extreme"', () => {
    expect(tapCode("extreme")).toEqual(". ..... ..... ... .... .... .... .. . ..... ... .. . .....");
  });

  test('Deve traduzir corretamente a sequência de pontos para "tonight"', () => {
    expect(tapCode(".... .... ... .... ... ... .. .... .. .. .. ... .... ....")).toEqual("tonight");
  });

  test('Deve traduzir corretamente a sequência de pontos para "loyalty"', () => {
    expect(tapCode("... . ... .... ..... .... . . ... . .... .... ..... ....")).toEqual("loyalty");
  });

  test('Deve traduzir corretamente a sequência de pontos para "referral"', () => {
    expect(tapCode(".... .. . ..... .. . . ..... .... .. .... .. . . ... .")).toEqual("referral");
  });

  test('Deve traduzir corretamente a sequência de pontos para "expression"', () => {
    expect(tapCode(". ..... ..... ... ... ..... .... .. . ..... .... ... .... ... .. .... ... .... ... ...")).toEqual("expression");
  });

  test('Deve traduzir corretamente a sequência de pontos para "affinity"', () => {
    expect(tapCode(". . .. . .. . .. .... ... ... .. .... .... .... ..... ....")).toEqual("affinity");
  });

  test('Deve traduzir corretamente a palavra "correspondence"', () => {
    expect(tapCode("correspondence")).toEqual(". ... ... .... .... .. .... .. . ..... .... ... ... ..... ... .... ... ... . .... . ..... ... ... . ... . ...");
  });

  test('Deve traduzir corretamente a palavra "atmosphere"', () => {
    expect(tapCode("atmosphere")).toEqual(". . .... .... ... .. ... .... .... ... ... ..... .. ... . ..... .... .. . .....");
  });

  test('Deve traduzir corretamente a palavra "absolute"', () => {
    expect(tapCode("absolute")).toEqual(". . . .. .... ... ... .... ... . .... ..... .... .... . .....");
  });

  test('Deve traduzir corretamente a palavra "redundancy"', () => {
    expect(tapCode("redundancy")).toEqual(".... .. . ..... . .... .... ..... ... ... . .... . . ... ... . ... ..... ....");
  });

  test('Deve traduzir corretamente a palavra "infrastructure"', () => {
    expect(tapCode("infrastructure")).toEqual(".. .... ... ... .. . .... .. . . .... ... .... .... .... .. .... ..... . ... .... .... .... ..... .... .. . .....");
  });

  test('Deve traduzir corretamente a sequência de pontos para "point"', () => {
    expect(tapCode("... ..... ... .... .. .... ... ... .... ....")).toEqual("point");
  });

  test('Deve traduzir corretamente a sequência de pontos para "preference"', () => {
    expect(tapCode("... ..... .... .. . ..... .. . . ..... .... .. . ..... ... ... . ... . .....")).toEqual("preference");
  });

  test('Deve traduzir corretamente a sequência de pontos para "guide"', () => {
    expect(tapCode(".. .. .... ..... .. .... . .... . .....")).toEqual("guide");
  });

  test('Deve traduzir corretamente a sequência de pontos para "characteristic"', () => {
    expect(tapCode(". ... .. ... . . .... .. . . . ... .... .... . ..... .... .. .. .... .... ... .... .... .. .... . ...")).toEqual("characteristic");
  });

  test('Deve traduzir corretamente a sequência de pontos para "commerce"', () => {
    expect(tapCode(". ... ... .... ... .. ... .. . ..... .... .. . ... . .....")).toEqual("commerce");
  });

  // Adicione mais casos de teste conforme necessário para cobrir todas as entradas fornecidas
});
