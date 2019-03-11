console.log('a = '+a);
var a = 2; // Hoisting é o "inçamento" dessa variável para o topo, assim sendo o primeiro "console.log()" não da erro, pois apessar de ainda n ter atribuido valor ele reconhece que a variável foi declarada
console.log('a = '+a);

console.log('b = ',b);
let b = 5; // Não ocorre o "hoisting" no "let"
console.log('b = ',b);
