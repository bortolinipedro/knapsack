# 🧮 Projeto – Problema da Mochila 0/1 (Knapsack)

Este projeto contém três implementações clássicas do Problema da Mochila 0/1, abrangendo soluções exatas e aproximadas, além de um gerador automático de entradas.

## 📂 Estrutura do Projeto

```
/
├── 01_linear_space.js
├── 02_dynamic_programming.js
├── 03_greedy.js
├── generate_inputs.js
├── inputs/
│   ├── input_10.json
│   ├── input_20.json
│   ├── input_30.json
│   ├── input_40.json
│   ├── input_42.json
│   └── ... (outros tamanhos, se gerados)
└── README.md
```

## 📌 Descrição dos Arquivos

### **generate_inputs.js**

Gera automaticamente instâncias do Problema da Mochila para diferentes tamanhos (10, 20, 30, ...). As instâncias geradas são salvas na pasta `inputs/`.

### **01_linear_space.js**

Implementação exata utilizando recursão com espaço linear. A solução é precisa, porém possui tempo exponencial, sendo adequada apenas para instâncias pequenas.

### **02_dynamic_programming.js**

Implementação exata utilizando Programação Dinâmica com tabela `O(nW)`. É eficiente e recomendada para instâncias médias.

### **03_greedy.js**

Implementação aproximada. Ordena os itens pela razão valor/peso e seleciona até atingir o limite da mochila. Não garante solução ótima, mas é bastante rápida.

Todos os algoritmos leem automaticamente os arquivos gerados em `inputs/`.

---

## 🔧 Como gerar os inputs

Antes de executar os algoritmos, gere os arquivos de entrada:

```bash
node generate_inputs.js
```

Isso criará vários arquivos `input_X.json` na pasta `inputs/`.

---

## ▶️ Como executar os algoritmos

Cada algoritmo é executado separadamente:

### **1. Algoritmo Exato (Espaço Linear)**

```bash
node 01_linear_space.js
```

### **2. Programação Dinâmica Completa**

```bash
node 02_dynamic_programming.js
```

### **3. Algoritmo Aproximado (Guloso)**

```bash
node 03_greedy.js
```

---

## 📝 Formato dos arquivos de entrada

Cada arquivo JSON possui a seguinte estrutura:

```json
{
  "val": [lista de utilidades],
  "wt":  [lista de pesos],
  "W":   capacidade_da_mochila
}
```

### Exemplo:

```json
{"val":[21,5,30,3,10],"wt":[18,3,12,2,6],"W":33}
```

---

## ✔️ Observações

* Os algoritmos buscam automaticamente os arquivos da pasta `inputs/`.
* O código imprime o tempo de execução e o valor da solução encontrada.
* Instâncias grandes podem causar tempos de execução elevados no algoritmo recursivo.

---
