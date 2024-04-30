const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt("Lado A: "));
let ladoB = parseFloat(prompt("Lado B: "));
let ladoC = parseFloat(prompt("Lado C: "));

const verificarTriangulo = (a, b, c) => {
    if(a < b + c){
        return true
    }else if(b < a + c){
        return true
    }else if(c < b + a){
        return true
    }else{
        return false
    }
}

if(verificarTriangulo(ladoA, ladoB, ladoC)){
    if(ladoA == ladoB && ladoB == ladoC){
        console.log('equilatero')
    }else if(ladoA != ladoB && ladoB != ladoC){
        console.log('escaleno')
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log('Isoceles')
    }
}else{
    console.log("Não é um triangulo")
}