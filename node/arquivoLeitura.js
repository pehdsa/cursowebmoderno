const fs = require('fs');
const caminho = __dirname + '/arquivo.json';

// sincrono... (não e muito interessante)
//const conteudo = fs.readFileSync(caminho, 'utf-8');
//console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
})

// NO CASO DE "json" NAO PRECISA DO "readFile" NEM DO "parse" POIS COM O REQUIRE ELA JA LE E TRAZ UM OBJETO. PORÉM VAI SER SINCRONO 
const config = require('./arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (err, conteudo) => {
    console.log('Conteúdo da pasta');
    console.log(conteudo);
})
