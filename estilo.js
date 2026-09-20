// 1. Dados iniciais

let nome = prompt("Digite seu nome e sobrenome:");
while (nome === null || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome.trim())) {
    nome = prompt("Nome inválido. Digite apenas letras e espaços:");
}
let renda = Number(prompt("Digite sua renda mensal:"));

// 2. Validação while

while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido. Digite uma renda mensal válida:"));
}

// Quantidade de despesas
let quantidadeDespesas = Number(
    prompt("Quantas despesas você deseja informar? (1 a 5)")
);

// Validação da quantidade de despesas
while (isNaN(quantidadeDespesas)) {
    quantidadeDespesas = Number(
        prompt("Valor inválido. Digite uma quantidade de despesas de 1 a 5:")
    );
}

// Limite entre 1 e 5
if (quantidadeDespesas < 1) {
    quantidadeDespesas = 1;
    alert("A quantidade de despesas foi ajustada para 1.");
    console.log("Quantidade de despesas ajustada para 1.");
} else if (quantidadeDespesas > 5) {
    quantidadeDespesas = 5;
    alert("A quantidade de despesas foi ajustada para o limite máximo de 5.");
    console.log("Quantidade de despesas ajustada para o limite máximo de 5.");
}

// 3. Lançamento das despesas com for

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
    let despesa = Number(prompt(`Digite o valor da Despesa ${i}:`));

    // Validação de cada despesa
    while (isNaN(despesa)) {
        despesa = Number(
            prompt(`Valor inválido. Digite o valor da Despesa ${i}:`)
        );
    }

    totalDespesas += despesa;
}

// 4. Análise com if / else

let sobra;
let mensagem;

if (totalDespesas > renda) {
    sobra = renda - totalDespesas;
    mensagem = "⚠️ Atenção! Você gastou mais do que ganhou.";
} else {
    sobra = renda - totalDespesas;

    if (sobra >= 0.30 * renda) {
        mensagem = "✅ Ótimo! Você conseguiu realizar uma boa gestão da sua renda.";
    } else {
        mensagem = "🙂 Ok! Você terá que melhor um pouco.";
    }
}

// 5. Resultado final

let resultado = `
Nome do usuário: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Mensagem: ${mensagem}
`;

// Exibe no alert
alert(resultado);

// Exibe no console
console.log("===== MEU SIMULADOR DE ORÇAMENTO PESSOAL =====");
console.log("Nome do usuário:", nome);
console.log("Renda: R$", renda.toFixed(2));
console.log("Total de despesas: R$", totalDespesas.toFixed(2));
console.log("Sobra: R$", sobra.toFixed(2));
console.log("Mensagem:", mensagem);
console.log("==========================================");