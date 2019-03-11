const pessoa = {
    nome : 'Ana'
    ,idade: 5
    ,Endereco : {
        logradouro : 'Rua do Marco'
        ,numero: 1000
    }
}

const { nome, idade } = pessoa; // Retira do objeto "pessoa" os atributos "nome" e "idade" e cria duas variáveis de mesmo nome
console.log(nome, idade);

const { nome:n, idade:i } = pessoa; // Retira do objeto "pessoa" os atributos "nome" e "idade" e cria duas variáveis definidas como "n(nome)" e "i(idade)"
console.log(n,i);

const { sobrenome, bemHumorada = true } = pessoa; // "undefined" para sobrenome pois n declarou dentro o objeot e "true" para "bemHumorada" pois apesar de n ter eclarado no objeot definiu como valor padrão
console.log(sobrenome, bemHumorada);

const { Endereco : { logradouro, numero, cep }} = pessoa;
console.log(logradouro,numero,cep);