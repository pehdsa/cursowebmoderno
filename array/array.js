// INSTANCIANDO
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

// LITERAL
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
aprovados[3] = 'João';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Zé';
console.log(aprovados);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1,0,'Elemento1','Elemento2');
console.log(aprovados)