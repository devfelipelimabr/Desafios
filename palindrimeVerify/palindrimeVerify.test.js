const PalindrimeVerify = require("./palindrimeVerify");

describe("PalindrimeVerify function", () => {
  test("Identifies a palindrome correctly", () => {
    expect(PalindrimeVerify("A man, a plan, a canal, Panama")).toBe(true);
  });

  test("Identifies a non-palindrome correctly", () => {
    expect(PalindrimeVerify("Hello world")).toBe(false);
  });

  test("Empty input should throw an error", () => {
    expect(() => {
      PalindrimeVerify("");
    }).toThrow("Valor inserido inválido.");
  });

  test("Non-string input should throw an error", () => {
    expect(() => {
      PalindrimeVerify(12345);
    }).toThrow("Valor inserido inválido.");
  });
});
