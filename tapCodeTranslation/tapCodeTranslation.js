const Polybius = [
  ["A", "B", "C", "D", "E", "F"],
  ["G", "H", "I", "J", "K", "L"],
  ["M", "N", "O", "P", "Q", "R"],
  ["S", "T", "U", "V", "W", "X"],
  ["Y", "Z", "-", "@", "#", "$"],
  ["%", "&", "+", "*", "/", "?"],
];

function WordToDotsTranslation(word) {
  if (typeof word !== "string") {
    throw new Error("A palavra deve ser uma string.");
  }

  word = word.toUpperCase();

  let translatedWord = [];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < Polybius.length; j++) {
      Polybius[j].forEach((letter, index) => {
        if (letter === word[i]) {
          translatedWord.push(
            numberToDots(j + 1) + " " + numberToDots(index + 1)
          );
        }
      });
    }
  }

  function numberToDots(num) {
    return ".".repeat(num);
  }

  translatedWord = translatedWord.toString();
  translatedWord = translatedWord.replace(/,/g, " ");
  return translatedWord;
}

function DotsToWordTranslation(dots) {
  let groupIndex = GroupIndex(dots);
  let word = GenerateWord(groupIndex);

  function GroupIndex(str) {
    if (typeof str !== "string") {
      throw new Error("Os pontos devem ser uma string.");
    }

    let GeneratedGroupIndex = [];
    let countDot = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        countDot++;
      } else if (str[i] === " ") {
        GeneratedGroupIndex.push(countDot);
        countDot = 0;
      } else {
        throw new Error("Character inválido");
      }
    }

    GeneratedGroupIndex.push(countDot);
    countDot = 0;

    return GeneratedGroupIndex;
  }

  function GenerateWord(arr) {
    if (!Array.isArray(arr) || arr.length % 2 !== 0) {
      throw new Error("O parâmetro não é um array.");
    }

    let GeneratedArr = [];
    let GeneratedWord = "";

    for (let i = 0; i < arr.length; i += 2) {
      GeneratedArr.push(Polybius[arr[i] - 1][arr[i + 1] - 1]);
    }

    GeneratedWord = GeneratedArr.join("");
    return GeneratedWord;
  }

  return word;
}

function TapTranslation(data) {
  let translate;

  if (typeof data === "string" && data[0] === ".") {
    translate = DotsToWordTranslation(data);
  } else if (typeof data === "string") {
    translate = WordToDotsTranslation(data);
  } else {
    throw new Error("Dados inseridos inválidos.");
  }

  return translate;
}

module.exports = TapTranslation;
