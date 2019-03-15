// Função em JS é First-Class Objects (Citizens)
// Higher-order function

// forma literal
function nomeFuncao(parametro) {}

// Armazenar em uma variável 
const nomeVariavel = function() {}

// Em um array
const nomeArray = [ function(a,b){ return a+b }, nomeFuncao, nomeVariavel ];
console.log(nomeArray[0](2,3));

// Aramazenar em atributos de um objeto
const nomeObjeto = {};
nomeObjeto.falar = function() { return 'Opa' }
console.log(nomeObjeto.falar());

// Passar uma função como parâmetro
function run(fun){
    fun();
}
run(function() { console.log('Carregando...') })

// Uma função pode retornar/conter outra função
function soma (a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2,3)(4);