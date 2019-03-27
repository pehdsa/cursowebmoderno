const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.0, bolsista: true },
    { nome: 'Paulo', nota: 4.5, bolsista: false },
    { nome: 'Lucas', nota: 6, bolsista: true }
]


const resultado = alunos.filter(a => a.bolsista).map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual;
});
console.log(resultado);
