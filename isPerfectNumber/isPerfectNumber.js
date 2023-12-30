function isPerfectNumber(numb) {
    if (numb <= 0 || !Number.isInteger(numb)) {
        throw new Error("O número é não inteiro e/ou menor/igual a zero");
    }

    function isMersennePrime(p) {
        if (p === 2) return true; // 2 é um caso especial
        let mersenneNumber = Math.pow(2, p) - 1;
        let s = 4;
        for (let i = 3; i <= p; i++) {
            s = (s * s - 2) % mersenneNumber;
        }
        return s === 0;
    }

    // Testar exponenciais p para os quais 2^p - 1 é primo
    let p = 2;
    while (Math.pow(2, p) - 1 <= numb) {
        if (numb === (Math.pow(2, p - 1)) * (Math.pow(2, p) - 1) && isMersennePrime(p)) {
            return true;
        }
        p++;
    }

    return false;
}

module.exports = isPerfectNumber;
