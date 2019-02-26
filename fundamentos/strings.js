const escola = "Cod3r";

// "charAt(4)" irá trazer o caracter que está na 4 posição, no caso o "r"
console.log(escola.charAt(4));

// "charCodeAt(3)" irá trazer o código unicode do caracter na posição "3", no caso é o caracter "3" que é igual a "51"
console.log(escola.charCodeAt(3));

// "indexOf('3')" irá trazer a posição do caracter "3" que no caso é a posição "3"
console.log(escola.indexOf('3'));

// "substring(1)" irá trazer a string a partir da posição "1" no caso "od3r"
console.log(escola.substring(1));

// "substring(0,3)" irá trazer a string a partir da posição "0" até a "3" sem contar com a "3", no caso "Cod"
console.log(escola.substring(0,3));

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola '+ escola + "!"); // MESMO RESULTADO QUE O "concat"

// replace ira substitui um caracter por outro especificado, no caso o "3 (que está na 3 posição)" por "e"
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','));