function tratarErroELancar(erro){
    //throw 'Error....'
    throw erro
    /*
    throw {
        nome : erro.name
        ,msg: erro.msg
        ,date: new Date
    }*/
}

// Vai ocorrer erro pois defini o atributo do objeto como "nome" e estou chamando na funçao como "name"
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroELancar(e);
    } finally { // "finally" sempre vai chamar mesmo dando erro "catch" ou não "try"
        console.log('final.')
    }
    
}
const obj = { nome : 'Roberto' };

imprimirNomeGritado(obj);