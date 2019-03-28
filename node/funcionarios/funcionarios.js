const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;
       
    const getMulherNaChina = funcionario => (funcionario.pais == 'China' && funcionario.genero == 'F')

    const mulherChinesaComMenorSalario = funcionarios.map(getPaisChina).
    
});