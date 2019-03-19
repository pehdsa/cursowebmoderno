console.log(soma(3,4)); // (você pode chamar a "function declaration" ela antes da construção pois le-se primeiro as funções)

// function declaration 
function soma(x, y){
    return x + y;
}

// function expression
const sub = function(x, y){
    return x - y;
}
console.log(sub(3,4)); // a "function expression" e "named function expression" só vai ser reconhecida após a linha q monta ela

// named function expression
const mult = function multi(x, y){
    return x * y;
}