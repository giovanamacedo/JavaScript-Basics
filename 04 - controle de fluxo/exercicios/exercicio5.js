//Crie uma função que receba um número limite para ser incrementado. Deve ser exibido cada número dentro desse limite e se ele é par ou ímpar.

function mostrarNumeros(limite) {
  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log([i], 'Par');
    }
    else {
      console.log([i], 'Ímpar');
    }
  }
}

//É possível usar conidção ternária também
//const mensagem = (i % 2 === 0) ? 'Par': 'Ímpar';

mostrarNumeros(10);