function UniqueElement(arr) {
    if (typeof arr === "string") {
        arr = removeSymbolsAndPunctuation(arr)
        arr = arr.split(" ")
    }
    if (!Array.isArray(arr)) {
        throw new Error("O parâmetro inserido não é um array.");
    }

    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (countOccurrencesWithFilter(arr, arr[i]) === 1) {
            result.push(arr[i])
        }

    }

    return result

}

function countOccurrencesWithFilter(arr, element) {
    return arr.filter(item => item === element).length;
}

function removeSymbolsAndPunctuation(sentence) {
    return sentence.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

module.exports = UniqueElement