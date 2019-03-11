
{
    // "let" DIFERENTE DO "var" RESPEITA O ESCOPO NO QUAL ELA FOI DECLARADA MESMO ESTE NAO SENDO UMA "function"
    let numero = 1;
    {        
        let numero = 2;
        console.log('Dentro = '+numero);
    }
    console.log('Fora = '+numero);
}
