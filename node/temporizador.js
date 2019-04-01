const schedule = require('node-schedule');

// "*/5 * 11 * * 6" = (a cada 5 segundos) (todos minutos) (hora 11) (todos dias do mes) (todos os meses) (6 dia da semana)
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 6', function(){
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)] // Segunda a Sábado
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2', new Date().getSeconds())
})