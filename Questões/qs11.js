const prompt = require("prompt-sync")();


while(true){
    let valor = parseInt(prompt("valor: "));
    if(valor === 0 || valor < 0){
        break
    }else if(valor % 2 === 0){
        console.log('Par')
    }else{
        console.log('Impar')
    }
}