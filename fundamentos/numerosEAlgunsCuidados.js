// IRÁ TRAZER O RESULTADO "Infinity" POIS O RESULTADO É INFINITO
console.log(7/0); 

// O JAVASCRIPT INTENDE O NÚMERO NA STRING
console.log('10'/2); 

// NÃO INTENDE QUALQUER STRING, NO CASO ABAIXO VAI DAR ERRO "NaN (Not A Number)"
console.log('Show!'/2); 

// NO CASO DO FLUTUANTE PODE ACONTECER IMPRECISÕES | NO CASO ABAIXO NÃO VAI TRAZER "0.8" e SIM "0.7999999999999999"
console.log(0.1 + 0.7);

// DA PRA FAZER COM UM LITERAL DENTRO DE "()"
console.log((10.355).toFixed(2));