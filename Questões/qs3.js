const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Valor 1: "));
let valor2 = parseInt(prompt("Valor 2: "));
let valor3 = parseInt(prompt("Valor 3: "));
let valor4 = parseInt(prompt("Valor 4: "));

valor4 = valor1 + valor2 + valor3
valor1 = valor1 + 25
valor2 = valor2 * 3 
valor3 = (valor3 * 12) / 100

console.log(valor1) 
console.log(valor2)
console.log(valor3)
console.log(valor4)