//AND
console.log(true && true); //true
console.log(true && false); //false

//OR
console.log(true || true); //true
console.log(true || false); //true

//NOT
console.log(!true); //false
console.log(!false); //true

//Truthy e Falsy
let corUsuario = undefined;
//let corUsuario = 'Vermelho';
let corPadrao = 'Azul';

let corAtual = corUsuario || corPadrao;
console.log(corAtual); //Se a corUsuario estiver com o valor 'Vermelho' irá imprimir vermelhor, mas se estiver com undefined irá imprimir 'Azul'