const prompt = require('prompt-sync')();

let somaProdutos = 0;
let somaPesos = 0;

while (true) {
    const entrada = parseFloat(prompt("Digite um número: "));
    if (entrada === 0) {
        break;
    }
    const peso = parseFloat(prompt("Digite o peso do número: "));
    
    somaProdutos += entrada * peso;
    somaPesos += peso;
}

if (somaPesos === 0) {
    console.log("Não foi fornecido nenhum número e peso para calcular a média ponderada.");
} else {
    const mediaPonderada = somaProdutos / somaPesos;
    console.log(`A média ponderada dos números é: ${mediaPonderada}`);
}
