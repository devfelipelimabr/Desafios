function PalindromeVerify(str) {
  if (!str || typeof str !== "string") {
    throw new Error("Valor inserido inválido.");
  }

  const filteredSentence = removeSymbolsAndPunctuation(
    removeAccents(removeSpaces(str))
  ).toLowerCase();

  const invertedSentence = reverseSentence(filteredSentence);
  let isPalindrime = filteredSentence === invertedSentence;

  return isPalindrime;
}

function removeSymbolsAndPunctuation(sentence) {
  return sentence.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

function removeAccents(sentence) {
  return sentence.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removeSpaces(sentence) {
  return sentence.replace(/\s/g, "");
}

function reverseSentence(sentence) {
  return sentence.split("").reverse().join("");
}

module.exports = PalindromeVerify