function IsPerfectNumber(numb) {
    if (!Number.isInteger(numb) || numb <= 0) {
        throw new Error("O número é não inteiro e/ou menor/igual a zero")
    }

    let acumulatorArr = []
    let acumulatorSum = 0

    for (let i = 1; i < numb; i++) {
        if (Number.isInteger(numb / i)) {
            acumulatorArr.push(i)
            acumulatorSum += i
        }
    }

    const isPerfect = acumulatorSum === numb


    return isPerfect

}

module.exports = IsPerfectNumber