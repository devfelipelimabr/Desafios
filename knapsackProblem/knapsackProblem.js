function KnapsackProblem(itens, capacity) {
    const n = itens.length;
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (itens[i - 1].weight <= j) {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - itens[i - 1].weight] + itens[i - 1].value
                );
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    const maxValue = dp[n][capacity]

    console.log("Itens:")
    console.log(itens)
    console.log("Capacity:")
    console.log(capacity)
    console.log("Max value:")

    return maxValue;
}

function gerarItens(qtyItens) {
    const itens = [];
    for (let i = 0; i < qtyItens; i++) {
        const weight = Math.floor(Math.random() * 10) + 1; // Peso aleatório entre 1 e 10
        const value = Math.floor(Math.random() * 20) + 1; // Valor aleatório entre 1 e 20
        itens.push({ weight, value });
    }
    return itens;
}

const itens = gerarItens(2**4)
const capacity = Math.floor(Math.random() * 15) + 5; // Capacidade aleatório entre 5 e 15

console.log(KnapsackProblem(itens, capacity));