const valores = [7.7, 5.5, 9.5, 4.8];
console.log(valores[0],valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

// "push" VAI ADICIONAR ELEMENTOS NO ARRAY
// ARRAY ACEITA QUALQUER TIPO DE VALOR
valores.push({id:3},false,null,'teste'); 
console.log(valores);

// "pop" vai tirar o último valor do array
console.log(valores.pop());
console.log(valores);

// "delete" vai tirar um alemento do array, nesse caso na primeira posição
delete valores[0];
console.log(valores);

// EM JAVASCRIPT O ARRAY È DO TIPO "Object"
console.log(typeof valores);