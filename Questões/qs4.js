const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("nota 1: "));
let nota2 = parseFloat(prompt("nota 2: "));
const media = (nota1 + nota2) / 2
if(media > 6.0){
    console.log('PARABÉNS! Você foi aprovado')
}