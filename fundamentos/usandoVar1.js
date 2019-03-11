// QUANDO CRIA UM "var" FORA DE UMA FUNÇÃO ELA AUTOMÁTICAMENTE VAI SE TORNAR GLOBAL
var teste = "Será???"
console.log(teste);

function testefunc(){
    var sera2 = 123;
    console.log(sera2); // VAI MOSTRAR POIS ESTÁ DENTRO DO ESCOPO DA FUNÇÃO
    console.log(teste); // IRÁ MOSTRAR POIS FOI DECLARADA FORA E SE TORNOU GLOBAL
}
testefunc();
//console.log(sera2) // VAI DAR ERRO POIS FORA DO ESCOPO DA FUNÇÃO ELA NÃO EXISTE