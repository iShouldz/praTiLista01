// Função para verificar se um número é primo
const isPrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let count = 0;
let numeroAtual = 101; 

while (count < 50) {
    if (isPrimo(numeroAtual)) {
        console.log(numeroAtual);
        count++;
    }
    numeroAtual++;
}
