const prompt = require("prompt-sync")();

const quantidade = parseInt(prompt("Quantidade de compra: "));
const total = 0;

if (quantidade >= 12) {
  total = quantidade * 0.25;
} else {
  total = quantidade * 0.3;
}

console.log('Valor total: ' + total)