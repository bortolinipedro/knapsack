// Algoritmo guloso para a mochila 0/1 baseado na razão utilidade/peso
function knapsackGreedy(W, val, wt) {
    const n = val.length;

    // Monta lista de itens com índice, peso, valor e razão valor/peso
    const itens = [];
    for (let i = 0; i < n; i++) {
        itens.push({
            index: i + 1,                 // índice 1-based
            value: val[i],
            weight: wt[i],
            ratio: val[i] / wt[i]
        });
    }

    // Ordena em ordem decrescente da razão valor/peso
    itens.sort((a, b) => b.ratio - a.ratio);

    let capacidadeRestante = W;
    let valorTotal = 0;
    const itensEscolhidos = [];

    // Percorre itens em ordem gulosa
    for (const item of itens) {
        if (item.weight <= capacidadeRestante) {
            // Escolhe o item
            itensEscolhidos.push(item.index);
            valorTotal += item.value;
            capacidadeRestante -= item.weight;
        }
    }

    return {
        totalValue: valorTotal,
        items: itensEscolhidos // índices 1-based dos itens escolhidos
    };
}

// ------------------------------------------------------
// TESTES
// ------------------------------------------------------

const fs = require("fs");
const path = require("path");

function loadInput(size) {
    const filePath = path.join(__dirname, "inputs", `input_${size}.json`);
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
}

const sizes = [
    10,
    20,
    30,
    40,
    42,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    10000,
    100000,
    1000000,
    10000000
];

for (const size of sizes) {

    console.log(`\n------------------------------------------------------`);
    console.log(`Teste com ${size} itens`);
    console.log(`------------------------------------------------------`);

    const { val, wt, W } = loadInput(size);

    console.time(`knapsack_${size}`);
    const result = knapsackGreedy(W, val, wt);
    console.timeEnd(`knapsack_${size}`);

    console.log(`Resultado (${size} itens):`, result);
}
