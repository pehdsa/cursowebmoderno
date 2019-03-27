const produtos = [
    { nome: 'Notbook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 2.49, fragil: false },
]

const produtoCaro = produto => produto.preco > 500;
const produtoFragil = produto => produto.fragil

// FITLER VAI CRIAR UM NOVO ARRAY TRAZEDO SO OS ELEMENTOS QUE PASSARAM POR UMA CONDIÇÃO
//const filtrado = produtos.filter(produtoCaro).filter(produtoFragil);
const filtrado = produtos.filter(function(e){
    return (e.preco >= 500 && e.fragil) ? true : false
})

console.log(filtrado);