// Arrow function 
const soma = (a, b) => a + b // Quando é de 1 linha o return ja está implícito
console.log(soma(3,4));

// Arrow function this
const lexico1 = () => console.log(this === exports);
lexico1();

// parêmetros default
function log(texto = 'Node'){
    console.log(texto);
}
log();
log('teste');

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,3,4,5,9));// transforma todos os parâmetrs em um array