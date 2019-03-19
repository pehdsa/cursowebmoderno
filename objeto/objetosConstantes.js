const pessoa = { nome : "João" }
// NESSE CASO VOCÊ PODE ALTERAR OS ATRIBUTOS DO OBJETO MAS NÃO ATRIBUIR NOVOS VALORES PARA A CONSTANTE

pessoa.nome = "Pedro"; // PODE, pois não está alterando a constante "pessoa" e sim o objeto dentro dela
//pessoa = { nome : "Maria" } // // NÃO PODE, gerará erro pois o "pessoa" é uma constante "const"

// usando o "freeze vc trava o objeto tmb"
Object.freeze(pessoa); 
pessoa.nome = "André"; // A PARTIR DO "freeze" não poderá mais modificar o objeto

console.log(pessoa) // MOSTRARÁ "{ nome : "Pedro" }" pois foi a ultima vez que alterou o objeto antes do freeze