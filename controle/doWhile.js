function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

// DIFERENTE DO 'WHILE' o 'DO/WHILE' VAI REALIZAR A OPERAÇÃO ANTES DA VERIFICAÇÃO LÓGICA DAR 'TRU/FALSE', assim sendo nesse caso ele vai entrar na estrutura de repetição mesmo sendo '-1'
do{
    opcao = getInteiroAleatorio(-1,10);
    console.log(`O numero escolhido foi ${opcao}.`);
}while(opcao != -1)

console.log('Até a próxima');