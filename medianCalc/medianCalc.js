function MedianCalc(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        throw new Error("Sem valores fornecidos.");
    } else if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("O parâmetro não é um array.");
    }

    const organizedArr = [...arr1, ...arr2].sort((a, b) => a - b)
    let median;

    if (organizedArr.length % 2 !== 0) {
        median = organizedArr[(parseInt(organizedArr.length / 2))]
    } else {
        median = (organizedArr[organizedArr.length / 2] + organizedArr[(organizedArr.length / 2) - 1]) / 2
    }

    if (typeof median === "number") {

        return median
    } else {
        throw new Error("Os arrays contêm elementos não numéricos.");
    }

}

module.exports = MedianCalc