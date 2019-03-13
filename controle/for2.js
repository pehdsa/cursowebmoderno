const notas = [6.5,7.1,8.6,9.2,5.4]

for (let i in notas){
    console.log(`Nota = ${notas[i]}`)
}

const pessoa = {
    nome : 'Ana',
    sobrenome : 'Vitoria',
    idade : 15,
    peso : 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}