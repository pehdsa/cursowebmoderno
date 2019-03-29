const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const getMulherNaChina = f => (f.pais === 'China' && f.genero === 'F')
const getMenorSalario = (func, funcAtual) => (func.salario > funcAtual.salario) ? funcAtual : func

axios.get(url).then(response => {
    const funcionarios = response.data;

    const mulherChinesaComMenorSalario = funcionarios.filter(getMulherNaChina).reduce(getMenorSalario);
    console.log(mulherChinesaComMenorSalario);
    
});