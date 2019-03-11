// Função sem retorno
function imprimirSoma(a,b){
    console.log(a + b);
}

imprimirSoma(2,3); // imprimirá "5"
imprimirSoma(2); // imprimirá a soma de "2 + undefined" que é "NaN(Not a Number)"
imprimirSoma(2,10,5,6,8); // irá ignorar os outros parâmetros e imprimir o resultado de "2 + 10" que é "12"
imprimirSoma(); // imprimirá uma somo de "undefine + undefined" que é "NaN(Not a Number)"

// Função com retorno
// com o "b" recebendo o valor 1 caso não vier como parâmetro
function soma(a, b = 1){
    return a + b;
}

console.log(soma(2,3)); // resultado de "2 + 3" que é "5"
console.log(soma(2)); // resultado de "2 + 1" que é "3"
console.log(soma()); // resultado de "undefined + 1" é "NaN(Not a Number)"