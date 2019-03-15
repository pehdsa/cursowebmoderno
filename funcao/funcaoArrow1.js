// classica
let dobro = function(a){
    return 2 * a;
}
console.log(dobro(2));

// ARROW FUNCTION
dobro = (a) => {
    return 2 * a;
}
console.log(dobro(4));

// ARROW FUNCTION
// NESSE MOLDE JÁ ESTÁ IMPLÍCITO O "return"
dobro = a => 2 * a
console.log(dobro(8));

let ola = function(){
    return 'Olá!!';
}

ola = () => 'Olá!!'
console.log(ola());