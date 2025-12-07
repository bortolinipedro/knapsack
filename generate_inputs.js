// ------------------------------------------------------
// generate_inputs.js
// Gera instâncias consistentes para o Problema da Mochila
// ------------------------------------------------------

const fs = require("fs");
const path = require("path");

// Pasta dos arquivos gerados
const DIR = path.join(__dirname, "inputs");

// Cria pasta se não existir
if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
    console.log("📁 Pasta 'inputs/' criada.");
}

// ------------------------------------------------------
// Função para gerar instância consistente
// ------------------------------------------------------
function generateKnapsackInstance(n) {
    const val = [];
    const wt = [];
    let totalWeight = 0;

    for (let i = 0; i < n; i++) {
        // Peso entre 1 e 20
        const weight = Math.floor(Math.random() * 20) + 1;

        // Utilidade = peso × fator aleatório entre 1 e 3
        const util = Math.floor(weight * (1 + Math.random() * 2));

        wt.push(weight);
        val.push(util);
        totalWeight += weight;
    }

    // A capacidade é 40% da soma dos pesos — padrão coerente
    const W = Math.floor(totalWeight * 0.4);

    return { val, wt, W };
}

// ------------------------------------------------------
// Tamanhos solicitados
// ------------------------------------------------------
const sizes = [
    10,
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

// ------------------------------------------------------
// Geração dos arquivos JSON
// ------------------------------------------------------
console.log("🟦 Iniciando geração dos inputs...\n");

sizes.forEach(size => {
    console.log(`🔹 Gerando input para N = ${size} itens...`);

    const instance = generateKnapsackInstance(size);

    const filePath = path.join(DIR, `input_${size}.json`);
    fs.writeFileSync(filePath, JSON.stringify(instance), "utf8");

    console.log(`   ➤ Arquivo salvo: inputs/input_${size}.json`);
});

console.log("\n✅ Concluído! Todos os arquivos foram gerados.");
