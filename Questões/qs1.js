//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
//valor correspondente em graus Fahrenheit.

const converterTemp = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(converterTemp(150))