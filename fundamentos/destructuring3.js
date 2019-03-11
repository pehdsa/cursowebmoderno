function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);    
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // aqui vai chamar a função rand trocando os atributos 'min = 40' e 'max = 50' e trazendo o resultado nesse intervalo
console.log(rand({ min: 955 })); // aqui vai chamar a função rand trocando os atributos 'min = 955' e o 'max' vai ser o padrão '1000'
console.log(rand({})); // aqui vai chamar a função rand utilizando dos atributos padrões
//console.log(rand()); // vai dar erro