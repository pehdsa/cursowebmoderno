function rand([ min = 0, max = 1000]){
    if(min > max) [min,max] = [max,min];
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);    
}

console.log(rand([40,50])); // aqui vai chamar a função rand trocando os atributos 'min = 40' e 'max = 50' e trazendo o resultado nesse intervalo
console.log(rand([955])); // aqui vai chamar a função rand trocando os atributos 'min = 955' e o 'max' vai ser o padrão '1000'
console.log(rand([,30])); // aqui vai chamar a função rand trocando o atributo "max" para "30"
console.log(rand([])); // aqui vai chamar a função rand utilizando dos atributos padrões
//console.log(rand()); // vai dar erro