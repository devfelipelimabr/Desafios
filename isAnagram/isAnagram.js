function IsAnagram(word1, word2) {
    if (typeof word1 !== "string" || typeof word2 !== "string") {
        throw new Error("Valores inseridos inválidos.")
    }

    const cleanedWord1 = removeSpaces(word1)
    const cleanedWord2 = removeSpaces(word2)

    const word1Arr = cleanedWord1.split('')
    const word2Arr = cleanedWord2.split('')

    const ordenedWord1 = word1Arr.sort().join('')
    const ordenedWord2 = word2Arr.sort().join('')

    let isAnagram = false

    if (ordenedWord1.toLowerCase() === ordenedWord2.toLowerCase()) {
        isAnagram = true

        return isAnagram
    } else {
        return isAnagram
    }
}

function removeSpaces(sentence) {
    return sentence.replace(/\s/g, "");
}

module.exports = IsAnagram