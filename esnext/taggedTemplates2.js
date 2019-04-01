function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('');
}

const valor = 29.99
const valorParcela = 11
console.log(real `1x de ${valor} ou 3x de ${valorParcela}`)