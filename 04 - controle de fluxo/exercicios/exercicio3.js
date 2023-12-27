//Se o número for divisível por 3 imprimir Fizz
//Se o número for divisível por 5 imprimir Buzz
//Se o número for divisível por 3 e 5 imprimir FizzBuzz
//Se não for divisível por 3 e 5 retorne o número
//Se não for um número exibir 'Não é um número'

const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzbuzz = 'FizzBuzz';
const naoehUmNumero = 'Não é um número';

function numerosDivisiveis (entrada) {
  if (typeof entrada !== 'number'){
    return naoehUmNumero;
  }
  if ((entrada % 3 === 0) && (entrada % 5 === 0)){
    return fizzbuzz;
  }
  if (entrada % 3 === 0){
    return fizz;
  }
  if (entrada % 5 === 0){
    return buzz;
  }
  else {
    return entrada;
  }  
}

const saida = numerosDivisiveis(8);
console.log(saida);