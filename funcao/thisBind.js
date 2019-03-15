const pessoa = {
    saudacao : 'Bom Dia!!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

// O erro ocorre pois o "this" vai relacionar ai "falarErro" e não mais ao "pessoa"
const falarErro = pessoa.falar;
falarErro();

// A solução é usar a funcão "bind" atribuindo o objeto pessoa
const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa();