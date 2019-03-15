function Pessoa(){
    this.idade = 0;

    setInterval(() => { // COM A FUNÇÃO ARROW O "this" VAI SER LIGADO A FUNÇÃO "Pessoa", ou seja, não varia de acordo com quem está chamando igual nas funções normais
        this.idade++;
        console.log(this.idade);
    },1000);

}

new Pessoa