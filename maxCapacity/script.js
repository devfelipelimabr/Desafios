// Objetivo do Código:
// O código determina o número mínimo de vezes que será necessário usar o maior frasco(capacidade máxima entre os disponíveis) para atingir ou ultrapassar o volume tank_volume.Se o volume tank_volume for maior do que a quantidade de água no poço(well_capacity), o código retorna - 1, indicando que é impossível encher o tanque.

function getCount(flasks, well_capacity, tank_volume) {
    if (tank_volume > well_capacity) {
        return -1;
    }
    const max_flask = Math.max(...flasks);
    return Math.ceil(tank_volume / max_flask);
}

// Test cases
function runTests() {
    const tests = [
        // Test 1: Caso básico, tanque é menor que capacidade total do poço
        { input: [[2, 3, 7, 1, 5, 4], 100, 34], expected: 5 },

        // Test 2: Tanque menor que o maior frasco
        { input: [[2, 3, 7, 1, 5, 4], 100, 6], expected: 1 },

        // Test 3: Tanque igual ao maior frasco
        { input: [[2, 3, 7, 1, 5, 4], 100, 7], expected: 1 },

        // Test 4: Tanque maior que o maior frasco, mas não múltiplo exato
        { input: [[2, 3, 7, 1, 5, 4], 100, 30], expected: 5 },

        // Test 5: Tanque maior que o maior frasco, múltiplo exato
        { input: [[2, 3, 7, 1, 5, 4], 100, 28], expected: 4 },

        // Test 6: Volume do tanque maior que a capacidade do poço
        { input: [[2, 3, 7, 1, 5, 4], 25, 34], expected: -1 },

        // Test 7: Tanque menor que a menor capacidade do frasco
        { input: [[10, 20, 30], 100, 5], expected: 1 },

        // Test 8: Apenas um frasco disponível
        { input: [[7], 100, 34], expected: 5 },

        // Test 9: Poço tem exatamente a mesma capacidade que o tanque
        { input: [[3, 5, 9], 34, 34], expected: 4 },

        // Test 10: Capacidade do tanque é zero
        { input: [[2, 3, 7, 1, 5, 4], 100, 0], expected: 0 },

        // Test 11: Frascos com capacidades iguais
        { input: [[5, 5, 5], 100, 20], expected: 4 },

        // Test 12: Tanque maior que o maior frasco, mas poço com capacidade insuficiente
        { input: [[3, 6, 9], 25, 30], expected: -1 }
    ];

    let passed = 0;

    tests.forEach((test, index) => {
        const result = getCount(...test.input);
        const success = result === test.expected;
        console.log(
            `Test ${index + 1}: ${success ? `(Expected ${test.expected}, Got ${result})` + "Passed ✅" : `Failed ❌ (Expected ${test.expected}, Got ${result})`
            }`
        );
        if (success) passed++;
    });

    console.log(`\n${passed}/${tests.length} tests passed.`);
}

// Run the tests
runTests();
