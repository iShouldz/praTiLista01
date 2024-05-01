const prompt = require('prompt-sync')();

for(let i = 0; i < 5; i++){
    const N = parseInt(prompt("Digite um número para calcular a tabuada: "));

    if (!isNaN(N)) {
        for (let i = 1; i <= N; i++) {
            console.log(`${i} x ${N} = ${i * N}`);
        }
    } else {
        console.log("Por favor, digite um número válido.");
    }
}
