function criarProduto(nome, preco, desconto = 0.5){
    return {
        nome // mesmo que 'nome:nome' pois tem o mesmo nome
        ,preco // mesmo que 'preco:preco' pois tem o mesmo nome
        ,desconto
    }
}

console.log(criarProduto('OMO',10.5))