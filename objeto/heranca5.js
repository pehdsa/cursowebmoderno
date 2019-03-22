console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}
console.log('Pedro Henrique'.reverse());

Array.prototype.first = function(){
    return this[0];
}
console.log([1,3,4,6,8].first());
console.log(['a','f','d','j','l'].first());