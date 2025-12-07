// Código baseado na solução em programação dinâmica Top-Down de 0/1 Knapsack do GeeksforGeeks:
// https://www.geeksforgeeks.org/dsa/0-1-knapsack-problem-dp-10/

// Retorna o valor máximo que pode ser colocado em uma mochila de capacidade W,
// usando programação dinâmica com memoização (top-down) e permitindo reconstruir
// os itens escolhidos.
function knapsackRec(W, val, wt, n, memo) {

    // Caso base: sem itens ou sem capacidade
    if (n === 0 || W === 0)
        return 0;

    // Se o subproblema já foi calculado, retorna o valor armazenado
    if (memo[n][W] !== -1)
        return memo[n][W];

    let pick = 0;

    // Escolhe o n-ésimo item se ele não exceder a capacidade da mochila
    if (wt[n - 1] <= W) {
        pick = val[n - 1] + knapsackRec(W - wt[n - 1], val, wt, n - 1, memo);
    }

    // Não escolhe o n-ésimo item
    const notPick = knapsackRec(W, val, wt, n - 1, memo);

    // Armazena o melhor resultado para o subproblema (n, W)
    memo[n][W] = Math.max(pick, notPick);
    return memo[n][W];
}

function knapsack(W, val, wt) {
    const n = val.length;

    // Tabela de memoização: (n+1) x (W+1)
    const memo = Array.from({ length: n + 1 }, () => Array(W + 1).fill(-1));

    // Calcula o valor máximo
    const maxValue = knapsackRec(W, val, wt, n, memo);

    // Reconstrução dos itens escolhidos
    let capacidadeRestante = W;
    const itensEscolhidos = [];

    for (let i = n; i > 0; i--) {
        // Se o valor na linha i é igual ao da linha i-1 para a mesma capacidade,
        // então o item i NÃO foi escolhido
        if (memo[i][capacidadeRestante] === memo[i - 1][capacidadeRestante]) {
            continue;
        } else {
            // Caso contrário, o item i foi escolhido
            itensEscolhidos.push(i); // índice 1-based
            capacidadeRestante -= wt[i - 1];

            // Se a capacidade chegou a zero, podemos parar
            if (capacidadeRestante <= 0) break;
        }
    }

    // Itens foram reconstruídos de trás pra frente, invertemos para ficar em ordem crescente
    itensEscolhidos.reverse();

    return {
        maxValue,
        items: itensEscolhidos
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
    1000
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
