const nome = "Rebeca";

// USANDO CONCATENÇÃO PADRÃO
const concatenacao = "Olá " + nome + "!";

// COM O A "``(Crase)" VIRÁ UM TEMPLATE STRING, QUE ACEITA QUEBRAR LINHA E INTERPOLAR COM VARIÁVEL (DEIXA O CÓDIGO MAIS "BONITO")
const templateString = `        
        Olá
        ${nome}!`;

console.log(concatenacao);
console.log(templateString);

// expressões...

// COM O TEMPLATE STRING DA PRA FFAZER EXPRESSOES INTERPOLADAS DENTRO DA STRING
console.log(`1+1 = ${1+1}`);

// função
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);