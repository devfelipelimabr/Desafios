// Função para gerar uma string aleatória
function generateRandomString(length, characters) {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Função para criar uma população inicial
function createInitialPopulation(populationSize, characters) {
    let population = [];
    for (let i = 0; i < populationSize; i++) {
        population.push(generateRandomString(targetString.length, characters));
    }
    return population;
}

// Função para calcular o fitness de uma string em relação ao alvo
function calculateFitness(str) {
    let score = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === targetString.charAt(i)) {
            score++;
        }
    }
    return score / targetString.length;
}

// Função para realizar o crossover entre duas strings
function crossover(parentA, parentB) {
    const crossoverPoint = Math.floor(Math.random() * parentA.length);
    const child = parentA.slice(0, crossoverPoint) + parentB.slice(crossoverPoint);
    return child;
}

// Função para realizar a mutação em uma string
function mutate(str, mutationRate, characters) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (Math.random() < mutationRate) {

            result += characters.charAt(Math.floor(Math.random() * characters.length));
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

// Função principal do algoritmo genético
function GeneticAlgorithm(targetString, populationSize, mutationRate, characters, targetFitness) {
    let population = createInitialPopulation(populationSize, characters);
    let found = false;
    let generation = 1;

    while (!found) {
        let matingPool = [];
        for (let i = 0; i < population.length; i++) {
            const fitness = calculateFitness(population[i]);
            const n = Math.floor(fitness * 100); // Aumenta as chances de ser selecionado com base no fitness
            for (let j = 0; j < n; j++) {
                matingPool.push(population[i]);
            }
        }

        let newPopulation = [];
        for (let i = 0; i < population.length; i++) {
            const parentA = matingPool[Math.floor(Math.random() * matingPool.length)];
            const parentB = matingPool[Math.floor(Math.random() * matingPool.length)];
            const child = crossover(parentA, parentB);
            const mutatedChild = mutate(child, mutationRate, characters);
            newPopulation.push(mutatedChild);

            if (calculateFitness(mutatedChild) === targetFitness) {
                found = true;
            }
        }

        population = newPopulation;
        console.log(`Generation: ${generation}`);
        console.log(`Population: ${population}`);
        console.log('');
        generation++;

        let count = 0
        for (let i = 0; i < population.length; i++) {
            if (population[i] !== targetString) {
                break
            } else {
                count++
            }
        }

        if (count === population.length) {
            break
        }
    }
}

// Parâmetros do algoritmo genético
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz./-';
const targetString = "devfelipelimabr.github";
const populationSize = 100;
const mutationRate = 0.001;
const targetFitness = .99

GeneticAlgorithm(targetString, populationSize, mutationRate, characters, targetFitness)

module.exports = GeneticAlgorithm