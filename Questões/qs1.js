//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
//valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

const converterTemp = (celsius) => {
    return celsius * 1.8 + 32
}

let entrada = parseFloat(prompt("Temperatura: "));
console.log(converterTemp(entrada))