function InverterOfWords(str) {
    if (typeof str !== "string") {
        throw new Error("O valor inserido não é uma string.")
    }

    const strArr = str.split(' ');
    let reverseStrArr = []

    for (let i = 0; i < strArr.length; i++) {
        reverseStrArr.push(strArr[i].split('').reverse().join(''))
    }

    return reverseStrArr.join(' ')

}

module.exports = InverterOfWords