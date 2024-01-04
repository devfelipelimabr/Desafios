function SumUniqueNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("O parâmetro não é um array.");
    } 

    const initialArr = arr.slice()
    const orderedArr = SortArrayAscending(arr)
    let uniqueNumsArr = []

    for (let i = 0; i < orderedArr.length; i++) {
        if (typeof orderedArr[i] !== "number") {
            throw new Error("O array informado contém elementos não numéricos.")
        } else {
            if (orderedArr[i] !== orderedArr[i - 1] && orderedArr[i] !== orderedArr[i + 1]) {
                uniqueNumsArr.push(orderedArr[i])
            }
        }
    }

    const sumUniqueNums = SumNumbers(uniqueNumsArr)

    const arrays = {
        "initialArr": initialArr,
        "orderedArr": orderedArr,
        "uniqueNumsArr": uniqueNumsArr,
        "sumUniqueNums": sumUniqueNums
    }

    return arrays
}

function SortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

function SumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

function GenerateRandomNumbers(length) {
    if (typeof length !== "number") {
        throw new Error("Tipo de número randomico incorreto.")
    }
    let array = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * length) + 1;
        array.push(randomNumber);
    }
    return array;
}

module.exports = SumUniqueNumbers