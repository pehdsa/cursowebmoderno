const escola = [
    {
        nome: 'Turma 1',
        alunos: [
            { nome: 'Joao', nota: 7.5 },
            { nome: 'Ana', nota: 9.6 },
            { nome: 'Juliana', nota: 8.3 }
        ]
    },
    {
        nome: 'Turma 2',
        alunos: [
            { nome: 'Marcos', nota: 6.5 },
            { nome: 'Rodrigo', nota: 7.8 },
            { nome: 'Rogéria', nota: 8.1 }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);
const notas1 = escola.map(getNotaTurma);
console.log(notas1);

// 
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback));
}
const notas2 = escola.flatMap(getNotaTurma);
console.log(notas2);

