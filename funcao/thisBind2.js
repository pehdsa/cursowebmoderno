// Sem o ".bind(this)" que está comentado o "this dentro do "setInterval" vai se referir a ele mesmo e não a função "Pessoa", assim sendo vai incrementar um valor indefinido dando "NaN(Not a Number)"

// Com o ".bind(this)" que está comentado, o "this" dentro do "setInterval" vai se referir a função "Pessoa" incrementando o idade = 0, resultado 1,2,3...
function Pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }/*.bind(this)*/,1000);

}

new Pessoa