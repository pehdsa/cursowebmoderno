// "..." rest(quando junta)/spreed(quando espalha)

// usar spreed com objeto
const funcionario = { nome: 'Maria', salario: 12400 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// usar spreed com array
const grupoA = ['JOão', 'Pedro', 'Glória']
const grupoFinal = [...grupoA, 'Maria', 'Joaquina']
console.log(grupoFinal);
