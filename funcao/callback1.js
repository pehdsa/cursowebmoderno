const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

// Callback é cade indice chama a função imprimir
fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));