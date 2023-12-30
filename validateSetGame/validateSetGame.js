function ValidateSetGame(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("O parâmetro não é um array.");
  } else if (arr.length != 3) {
    throw new Error("A quantidade de cartas deve ser de três.");
  }

  const card1 = arr[0];
  const card2 = arr[1];
  const card3 = arr[2];

  let colorSet = false;
  let numberSet = false;
  let shadeSet = false;
  let shapeSet = false;

  let isSet = false;

  if (
    (card1.color === card2.color && card2.color === card3.color) ||
    (card1.color !== card2.color &&
      card2.color !== card3.color &&
      card1.color !== card3.color)
  ) {
    colorSet = true;
  }

  if (
    (card1.number === card2.number && card2.number === card3.number) ||
    (card1.number !== card2.number &&
      card2.number !== card3.number &&
      card1.number !== card3.number)
  ) {
    numberSet = true;
  }

  if (
    (card1.shade === card2.shade && card2.shade === card3.shade) ||
    (card1.shade !== card2.shade &&
      card2.shade !== card3.shade &&
      card1.shade !== card3.shade)
  ) {
    shadeSet = true;
  }

  if (
    (card1.shape === card2.shape && card2.shape === card3.shape) ||
    (card1.shape !== card2.shape &&
      card2.shape !== card3.shape &&
      card1.shape !== card3.shape)
  ) {
    shapeSet = true;
  }

  if (colorSet && numberSet && shadeSet && shapeSet) {
    isSet = true;
  }

  return isSet;
}

const cards = [
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" },
];

console.log(ValidateSetGame(cards));

module.exports = ValidateSetGame;
