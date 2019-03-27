const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.0, bolsista: false },
    { nome: 'Paulo', nota: 4.5, bolsista: false },
    { nome: 'Lucas', nota: 6, bolsista: true }
]


// Dasafio 1: Todos elementos sao bolsistas?

const resultado = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado && bolsista
});
console.log(resultado);

// Desafio 2: Algum aluno é bolsista?
const resultado2 = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado || bolsista
});
console.log(resultado2);