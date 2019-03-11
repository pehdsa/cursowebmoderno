{
    // "var" SE TORNA GLOBAL DENTRO DE QUALQUER ESCOPO (EXCETO ESCOPO DE UMA "function")
    var numero = 1;
    {
        var numero = 2;
        console.log('Dentro = '+numero);
    }
    console.log('Fora = '+numero);
}
