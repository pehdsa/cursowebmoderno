const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// PEGA TODAS AS CHAVES DO OBJETO "pessoa"
console.log(Object.keys(pessoa));

// PEGA TODOS OS VALORES DO OBJETO "pessoa"
console.log(Object.values(pessoa));

// PEGA TODAS AS CHAVES E OS VALORES DO OBJETO "pessoa"
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // vai ser listada
    writable: false, // não pode ser modificada
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2017'; // Não vai alterar pois travou o objeto com o "writable : false"
console.log(pessoa.dataNascimento);