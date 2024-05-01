const prompt = require('prompt-sync')();
let quantidade = 0
let total = 0

while(true){
    let entrada = parseFloat(prompt("Digite um número: "));
    if(entrada === 0){
        break
    }
    total += entrada
    quantidade += 1
}
   
    

console.log('Media: '+ total / quantidade)

