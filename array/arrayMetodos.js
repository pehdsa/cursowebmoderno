const pilotos = ['Vettel', 'Alonso', 'Reikkonen', 'Massa'];
console.log(pilotos);

pilotos.pop(); // TIRA O ULTIMO
console.log(pilotos);

pilotos.push('Verstappen'); // ADICIONA APOS O ULTIMO INDICE
console.log(pilotos)

pilotos.shift() // REMOVE O PRIMEIRO
console.log(pilotos);

pilotos.unshift('Hamilton'); // ADICIONA NO PRIMEIRO INDICE
console.log(pilotos)

// splice pode adicionar e remover elementos

// ADICIONAR
pilotos.splice(2,0,'Botas','Massa') // ADICIONA APOS O INDICE "2" O "Botas" E "MASSA"
console.log(pilotos)

// REMOVER
pilotos.splice(3,1) // REMOVE "1" APARTIR DO INDICE "3"
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2); // faz outro array até o indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4); // faz outro array do 1 até o um antes do 4 o "3"
console.log(algunsPilotos2);
