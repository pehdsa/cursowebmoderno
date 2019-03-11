// aqui a variável foi declarada porém n foi atribuido nenhum valor nela retornando o resultado "undefined (indefinida)"
let valor
console.log(valor);

// aqui estou definindo o valor "null(nulo - sem nenhuma atribuição, vazio)" para a variável, retornando esse valor
valor = null;
console.log(valor);
//console.log(valor.toString()); Erro!


const produto = {};
 produto.preco = null;

 console.log(!produto.preco);
