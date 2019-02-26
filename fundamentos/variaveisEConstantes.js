var a = 3;
let b = 4; // Mais utilizável atualmente para criar variáveis

var a = 30; // NÃO É RECOMENDADO FAZER ISSO, MAS COM O "var" VOCE PODE REDECLARAR QUE NÃO VAI GERAR ERRO.
// let b = 40; VAI MOSTRAR ERRO POÍS O "let" NÃO DEIXA REDECLARAR A VARIÁVEL.
b = 40; 

console.log(a,b);

const c = 50; // "const" É USADO PARA VARIAVEIS QUE NÃO IRÃO MUDAR O VALOR NUNCA.
// c = 5; GERARÁ ERRO POIS NÃO PODE ATRIBUIR UM NOVO VALOR PARA UMA CONSTANTE.

console.log(c);