const notas = [7.1, 6.5, 5.0, 8.5, 9.5, 3.0, 7.8];

// SEM CALLBACK
const notasBaixas1 = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
}   
console.log(notasBaixas1);


// COM CALLBACK
const notasBaixas2 = notas.filter(nota => nota < 7);
console.log(notasBaixas2);