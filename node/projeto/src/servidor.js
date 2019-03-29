const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // CONVERTE PARA JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // CONVERTE PARA JSON ("req.params.id" cai receber o parametro "id" do ":id")
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); // JSONrs    
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); // JSONrs    
})
 
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`);
})


