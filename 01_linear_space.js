// Código baseado na solução recursiva de 0/1 Knapsack do GeeksforGeeks:
// https://www.geeksforgeeks.org/dsa/0-1-knapsack-problem-dp-10/

// Retorna o valor máximo que
// pode ser colocado em uma mochila de capacidade W
function knapsackRec(W, val, wt, n) {

    // Caso base
    if (n === 0 || W === 0)
        return 0;

    let pick = 0;

    // Escolhe o n-ésimo item se ele não exceder a capacidade da mochila
    if (wt[n - 1] <= W)
        pick = val[n - 1] + knapsackRec(W - wt[n - 1], val, wt, n - 1);
    
    // Não escolhe o n-ésimo item
    let notPick = knapsackRec(W, val, wt, n - 1);
     
    return Math.max(pick, notPick);
}

function knapsack(W, val, wt) {
    let n = val.length;
    return knapsackRec(W, val, wt, n);
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
    42
];

for (const size of sizes) {

    console.log(`\n------------------------------------------------------`);
    console.log(`Teste com ${size} itens`);
    console.log(`------------------------------------------------------`);

    const { val, wt, W } = loadInput(size);

    console.time(`knapsack_${size}`);
    const result = knapsack(W, val, wt);
    console.timeEnd(`knapsack_${size}`);

    console.log(`Resultado (${size} itens):`, result);
}
