const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1,filha1.corCabelo);


const filha2 = Object.create(pai,{
    nome : { value : 'Bia', writable: false, enumerable: true }    
});
filha2.nome = 'Carla'; // não vai alterar pois a propriedade esta com "writable: false"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(`Própria: ${key}`) : console.log(`Por herança: ${key}`);
}

