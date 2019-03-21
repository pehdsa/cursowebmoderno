// cadeia de protótipos (Prototype chain)
Object.prototype.attr0 = 'Z';
const avo   = { attr1 : 'A' }
const pai   = { __proto__ : avo, attr2 : 'B', attr3 : '3' }
const filho = { __proto__ : pai, attr3 : 'C' } 

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual : 0,
    velMaxima : 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMaxima}km/h`;
    }
}

const ferrari = {
    modelo : 'F40'
    ,velMaxima : 324
}

const volvo = {
    modelo : 'V40'
    ,status(){
        return `${this.modelo} : ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro); // ferrari esta recebendo todos os atributos do carro por herança
Object.setPrototypeOf(volvo, carro); // volvo esta recebendo todos os atributos do carro por herança

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(300)
console.log(ferrari.status());