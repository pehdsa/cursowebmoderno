// "break" sai do laço for
// "continue" pula pra próximo indice

const num = [1, 2, 3, 4, 5, 6, 7, 8];

for (let x in num){
    if (x == 5) break;
    console.log(`${x} = ${num[x]}`);
}

for (let y in num){
    if (y == 5) continue;
    console.log(`${y} = ${num[y]}`);
}