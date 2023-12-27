//Crie uma função que receba uma imagem e diga se ela é paisagem, ou seja, se a largura (width) é maior que a largura (height)
/* 
function ehPaisagem(largura, altura) {
  if (largura > altura) {
    return true;
  } else {
    return false;
  }
} */

function ehPaisagem(largura, altura) {
  return (largura > altura);
}

let resultado = ehPaisagem(1500, 400);
console.log(resultado);