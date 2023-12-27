//Crie uma função que receba dois números e retorne o maior

/* function maiorNumero (numero1, numero2){
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}; */

//Refatorando
function maiorNumero(numero1, numero2) {
  return (numero1 > numero2) ? numero1 : numero2;
}

let resultado = maiorNumero(5, 10);
console.log('O maior número é: ', resultado);