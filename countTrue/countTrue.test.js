const countTrue = require('./countTrue');

test('Conta corretamente o número de booleanos verdadeiros no array', () => {
  expect(countTrue([true, true, false, true, false])).toBe(3);
});

test('Retorna 0 para um array vazio', () => {
  expect(countTrue([])).toBe(0);
});

test('Retorna 0 para um array sem booleanos', () => {
  expect(countTrue([1, 0, "casa", null, undefined])).toBe(0);
});

test('Retorna erro para um parâmetro que não é um array', () => {
  expect(() => {
    countTrue("não é um array");
  }).toThrow('O parâmetro não é um array.');
});

test('Retorna erro para um parâmetro que não é um array', () => {
  expect(() => {
    countTrue(5);
  }).toThrow('O parâmetro não é um array.');
});

test('Retorna erro para um parâmetro que não é um array', () => {
  expect(() => {
    countTrue('ponte');
  }).toThrow('O parâmetro não é um array.');
});

test('Retorna erro para um parâmetro que não é um array', () => {
  expect(() => {
    countTrue(undefined);
  }).toThrow('O parâmetro não é um array.');
});

test('Retorna erro para um parâmetro que não é um array', () => {
  expect(() => {
    countTrue(null);
  }).toThrow('O parâmetro não é um array.');
});

// Adicione outros testes conforme necessário para cobrir casos especiais ou limites
