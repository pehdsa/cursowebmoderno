// usando notação literal
const obj1 = {}
console.log(obj1);

//
console.log(typeof Object, typeof new Object);

const obj2 = new Object;
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc){
    // "this." deixa o atributo público, podendo ser acessado fora do escopo do objeto
    this.nome = nome; // Tornando o atributo "nome" público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}
const p1 = new Produto('Caneta',7.99,0.15);
const p2 = new Produto('Notebook',2999.99,0.4);
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto());
// consigo acessar o "getPrecoComDesconto" pois foi atribuido o "this." dentro do objeto, tornando o metodo público
//console.log(p1.preco); // retornará "undefined" pois o atributo "preco" não está público dentro do objeto (com "this."), assim sendo não poderá ser acessado fora dele


// função factory
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}
const f1 = criarFuncionario('João',7980,4);
const f2 = criarFuncionario('Maria',11400,1);
console.log(f1.getSalario(),f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"Eu sou um JSON"}');
console.log(fromJSON.info);
