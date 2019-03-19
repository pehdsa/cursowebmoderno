class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('João');
p1.falar();

// FUNÇÃO CONSTRUTORA/FACTORY
const criaPessoa = nome => {    
    return {
        falar : () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criaPessoa('João');
p2.falar()



