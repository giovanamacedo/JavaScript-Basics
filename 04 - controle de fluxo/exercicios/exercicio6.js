//Crie uma função que retorna os elementos truthy dentro de um array.
const array = [0, 1, 2, 3, 4, false];

function contarTruthy(array) {
  let contador = 0;

  for (let valor of array) {
    if (valor) {
      contador++;      
    }
  }
  return contador;
}

console.log(contarTruthy(array));