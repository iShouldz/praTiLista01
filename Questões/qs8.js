const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Valor 1: "));
let valor2 = parseInt(prompt("Valor 2: "));

if(valor1 > valor2){
    console.log(valor2 + ', ' + valor1)
}else{
    console.log(valor1 + ', ' + valor2)
}