console.log(module.exports === this)
console.log(module.exports === exports)

// todos são o mesmo
this.a = 1;
exports.b = 2;
module.exports.c = 3;

//exports = null
console.log(module.exports);