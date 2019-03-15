function soma(){
    let soma = 0;
    for (i in arguments){ // "arguments e um array que tem como padrão dentro da função que vai conter tudo que vc passou como parâmetro"
        soma += arguments[i];        
    }
    console.log(soma);
}

soma(4,4,4,4);

