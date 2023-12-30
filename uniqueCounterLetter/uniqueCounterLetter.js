function UniqueCounterLetter(str) {
    if (typeof str !== "string") {
        throw new Error("Entrada de dados inválida.");
    }
    const filteredSentence = removeSymbolsAndPunctuation(
        removeSpaces(str)
    );

    let uniqueArr = [];

    for (let i = 0; i < filteredSentence.length; i++) {
        if (!uniqueArr.includes(filteredSentence[i])) {
            uniqueArr.push(filteredSentence[i])
        }
    }

    return uniqueArr;
}

function removeSymbolsAndPunctuation(sentence) {
    return sentence.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

function removeSpaces(sentence) {
    return sentence.replace(/\s/g, "");
}

module.exports = UniqueCounterLetter