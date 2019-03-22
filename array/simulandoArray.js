const quaseArray = { 0 : 'Ana', 1: 'João', 2: 'Maria' }
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.value(this)
    },
    enumerable: false
})

console.log(quaseArray[0]);