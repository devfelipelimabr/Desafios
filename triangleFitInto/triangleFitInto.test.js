const TriangleFitInto = require('./triangleFitInto');

describe('TriangleFitInto', () => {
  test('Deve retornar true se o primeiro triângulo couber no segundo', () => {
    const triangle1 = [3, 4, 5];
    const triangle2 = [6, 8, 10];
    expect(TriangleFitInto(triangle1, triangle2)).toBe(true);
  });

  test('Deve retornar true se o primeiro triângulo for igual ao segundo', () => {
    const triangle1 = [5, 12, 13];
    const triangle2 = [5, 12, 13];
    expect(TriangleFitInto(triangle1, triangle2)).toBe(true);
  });

  test('Deve retornar false se o primeiro triângulo não couber no segundo', () => {
    const triangle1 = [2, 2, 2];
    const triangle2 = [1, 1, 1];
    expect(TriangleFitInto(triangle1, triangle2)).toBe(false);
  });

  test('Deve lançar um erro se não forem passadas todas as medidas', () => {
    const triangle1 = [3, 4];
    const triangle2 = [6, 8, 10];
    expect(() => {
      TriangleFitInto(triangle1, triangle2);
    }).toThrow('Não foram passadas todas as medidas.');
  });

  test('Deve lançar um erro se valores não numéricos forem passados', () => {
    const triangle1 = [3, 4, '5'];
    const triangle2 = [6, 8, 10];
    expect(() => {
      TriangleFitInto(triangle1, triangle2);
    }).toThrow('Foram passados valores não numéricos');
  });

  test('Deve lançar um erro se não forem triângulos válidos', () => {
    const triangle1 = [1, 2, 3];
    const triangle2 = [4, 5, 10];
    expect(() => {
      TriangleFitInto(triangle1, triangle2);
    }).toThrow('Há não triângulo(s)');
  });
});
