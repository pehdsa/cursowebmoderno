const valor = 'Global';

function chamaValor(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    chamaValor(); // a função chmará  valo "Global" e não "Local", pois era o valor quando foi declarada.
}

exec();