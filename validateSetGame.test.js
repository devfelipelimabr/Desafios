const ValidateSetGame = require("./validateSetGame");

describe("ValidateSetGame", () => {
  it("should throw an error if the parameter is not an array", () => {
    expect(() => ValidateSetGame("not an array")).toThrow(
      "O parâmetro não é um array."
    );
  });

  it("should throw an error if the array length is not 3", () => {
    expect(() => ValidateSetGame([])).toThrow(
      "A quantidade de cartas deve ser de três."
    );
    expect(() =>
      ValidateSetGame([{ color: "red" }, { color: "green" }])
    ).toThrow("A quantidade de cartas deve ser de três.");
  });

  it("should correctly identify a valid set", () => {
    const validSet1 = [
      { color: "green", number: 1, shade: "empty", shape: "squiggle" },
      { color: "green", number: 2, shade: "empty", shape: "diamond" },
      { color: "green", number: 3, shade: "empty", shape: "oval" },
    ];
    expect(ValidateSetGame(validSet1)).toBe(true);

    const validSet2 = [
      { color: "purple", number: 1, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 1, shade: "full", shape: "oval" },
    ];
    expect(ValidateSetGame(validSet2)).toBe(true);
  });

  it("should correctly identify an invalid set", () => {
    const invalidSet = [
      { color: "purple", number: 3, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 3, shade: "full", shape: "oval" },
    ];
    expect(ValidateSetGame(invalidSet)).toBe(false);
  });

  it("should correctly identify more valid and invalid sets", () => {
    // Adicionando os novos testes
    const testSet1 = [
      { color: "red", number: 1, shade: "lined", shape: "squiggle" },
      { color: "red", number: 1, shade: "lined", shape: "diamond" },
      { color: "red", number: 1, shade: "lined", shape: "squiggle" },
    ];
    expect(ValidateSetGame(testSet1)).toBe(false);

    const testSet2 = [
      { color: "red", number: 1, shade: "lined", shape: "squiggle" },
      { color: "red", number: 1, shade: "lined", shape: "diamond" },
      { color: "red", number: 1, shade: "lined", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet2)).toBe(true);

    const testSet3 = [
      { color: "red", number: 1, shade: "empty", shape: "squiggle" },
      { color: "red", number: 1, shade: "lined", shape: "diamond" },
      { color: "red", number: 1, shade: "lined", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet3)).toBe(false);

    const testSet4 = [
      { color: "red", number: 1, shade: "empty", shape: "squiggle" },
      { color: "red", number: 2, shade: "lined", shape: "diamond" },
      { color: "red", number: 3, shade: "full", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet4)).toBe(true);

    const testSet5 = [
      { color: "green", number: 1, shade: "empty", shape: "squiggle" },
      { color: "green", number: 2, shade: "empty", shape: "diamond" },
      { color: "green", number: 3, shade: "empty", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet5)).toBe(true);

    const testSet6 = [
      { color: "purple", number: 1, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 1, shade: "full", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet6)).toBe(true);

    const testSet7 = [
      { color: "purple", number: 3, shade: "full", shape: "oval" },
      { color: "green", number: 1, shade: "full", shape: "oval" },
      { color: "red", number: 3, shade: "full", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet7)).toBe(false);

    const testSet8 = [
      { color: "red", number: 1, shade: "empty", shape: "squiggle" },
      { color: "red", number: 2, shade: "lined", shape: "diamond" },
      { color: "purple", number: 3, shade: "full", shape: "oval" },
    ];
    expect(ValidateSetGame(testSet8)).toBe(false);
  });

  // Add more test cases for different scenarios as needed
});
