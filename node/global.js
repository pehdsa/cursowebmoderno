// É BOM DAR UM FREEZE PARA N PODER MEXER NAS DEPENDENCIAS

global.minhaApp = Object.freeze({
    saudacao(){
        return 'Olá'
    },
    nome: 'Sistema Legal'
});