///Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let total = parseInt(prompt("Total: "));
let brancos = parseInt(prompt("Brancos: "));
let nulos = parseInt(prompt("Nulos: "));
let validos = parseInt(prompt("Validos: "));

if(brancos + nulos + validos !== total){
    console.log("Valores incogruentes")
}else{
    console.log('Porcentagem brancos: ' + (brancos * 100) / total)
    console.log('Porcentagem nulos: ' + (nulos * 100) / total)
    console.log('Porcentagem validos: ' + (validos * 100) / total)
}

