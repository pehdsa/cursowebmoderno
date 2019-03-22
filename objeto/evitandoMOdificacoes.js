// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Extensível: ',Object.isExtensible(produto));
produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar'; // COM O "preventExtensions" não pode
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: 'Juliana', idade: 30 };
Object.seal(pessoa);
console.log('Selado: ',Object.isSealed(pessoa));

pessoa.nome = 'João';
pessoa.sobrenome = 'Henrique' // COM O "seal" não pode
delete pessoa.idade; // COM O "seal" não pode

console.log(pessoa);

// Object.freeze selado + valores constantes