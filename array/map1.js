const nums = [1, 2, 3, 4, 5]

// "map" vai compor um novo array através do resultado de um função em cima do array principal. NO caso abaixo fiz pegar cada posição e mutiplicar por 2
let resultado = nums.map(function(e){
    return e * 2;
})

//console.log(nums,resultado)

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

// MAP VAI CRIAR UM NOVO ARRAY COM OS VALORES E SUAS ATRIBUIÇÕES NOVAS
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado)
