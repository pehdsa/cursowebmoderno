const aprovados = ['Ana','Julia','Matheus','Vitor'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`);
})

aprovados.forEach((nome, indice) => console.log(`${indice+1}) ${nome}`) );

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);