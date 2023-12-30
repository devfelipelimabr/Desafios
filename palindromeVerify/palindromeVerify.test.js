const PalindromeVerify = require("./palindromeVerify");

describe("PalindromeVerify function", () => {
  test("Identifies a palindrome correctly", () => {
    expect(PalindromeVerify("A man, a plan, a canal, Panama")).toBe(true);
  });

  test("Identifies a non-palindrome correctly", () => {
    expect(PalindromeVerify("Hello world")).toBe(false);
  });

  test("Empty input should throw an error", () => {
    expect(() => {
      PalindromeVerify("");
    }).toThrow("Valor inserido inválido.");
  });

  test("Non-string input should throw an error", () => {
    expect(() => {
      PalindromeVerify(12345);
    }).toThrow("Valor inserido inválido.");
  });
});
