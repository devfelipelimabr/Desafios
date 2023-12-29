function SexagenaryChineseCycle(year) {
  const startYear = -2636;
  const maxYear = 5000;
  if (typeof year !== "number") {
    throw new Error("Não foi informado um número válido.");
  } else if (year <= startYear || year > maxYear) {
    throw new Error("Ano inserido fora do range aceitável");
  }

  const elements = ["wood", "fire", "earth", "metal", "water"];
  const animals = [
    "rat",
    "ox",
    "tiger",
    "rabbit",
    "dragon",
    "snake",
    "horse",
    "sheep",
    "monkey",
    "rooster",
    "dog",
    "pig",
  ];
  // const startCombination = [elements[0], animals[0]];

  const elapsedYears = year - startYear;

  let combination = [];

  let elementsCount = 0;
  let animalsCount = 0;

  let countCombLength = combination.length;

  let lastComb = [];

  for (let i = 0; i <= elapsedYears; i++) {
    if (i % 2 === 0) {
      countCombLength % 12 === 0 ? (animalsCount = 0) : animalsCount++;
      combination.push([elements[elementsCount], animals[animalsCount]]);
      countCombLength++;
    } else {
      countCombLength % 12 === 0 ? (animalsCount = 0) : animalsCount++;
      combination.push([elements[elementsCount], animals[animalsCount]]);
      countCombLength++;
      countCombLength % 10 === 0 ? (elementsCount = 0) : elementsCount++;
    }
    if (combination.length > 1) {
      combination.shift();
      lastComb = combination[0];
    }
    // if (lastComb[0] === startCombination[0] && lastComb[1] === startCombination[1]) {
    //   break;
    // }
  }
  return lastComb;
}

module.exports = SexagenaryChineseCycle