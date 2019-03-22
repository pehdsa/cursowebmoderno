const obj = { a: 1, b: 2, c: 3 , soma() { return a + b + c }}
console.log(JSON.stringify(obj)); // VAI TIRAR A FUNÇÃO "soma" POIS O JSON E FORMATO TEXTUAL

//console.log(JSON.parse("{ a : 1, b : 2, c : 3}")) ERRADO
//console.log(JSON.parse("{ 'a' : 1, 'b' : 2, 'c' : 3}")) ERRADO
console.log(JSON.parse('{ "a" : 1, "b" : 2, "c" : 3}')) // CERTO
console.log(JSON.parse('{ "a" : 1.7, "b" : "string", "c" : {}, "d" : [], "e" : true}')) // CERTO | PASSA OBJETOS E ARRAYS TMB
const obj2 = JSON.parse('{ "a" : 1.7, "b" : "string", "c" : {}, "d" : [], "e" : true}');
console.log(obj2);