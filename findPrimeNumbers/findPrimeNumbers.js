function FindPrimeNumbers(start, end) {

    if (typeof start !== "number" || typeof end !== "number") {
        throw new Error("Tipo de entradas inválidos.")
    } else if (start < 1) {
        throw new Error("O ínicio deve ser maior ou igual a 1.")
    } else if (end > 2 ** 26) {
        throw new Error("Range muito alto.")
    }
    else {
        start = parseInt(start)
        end = parseInt(end)
    }

    let result = sieveOfEratosthenes(start, end)

    return result
}

function sieveOfEratosthenes(start, end) {
    const limit = Math.max(end, 2);
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = Math.max(2, start); i <= end; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }

    return primes;
}

module.exports = FindPrimeNumbers