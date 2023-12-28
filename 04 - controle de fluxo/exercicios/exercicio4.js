//Crie uma função que receba um parâmetro representando a velocidade um carro. 
// O limite máximo é 70km/h
//Se o carro estiver abaixo ou igual ao limite de velocidade deverá ser exibido 'Ok'
//A cada 5km acima do limite permitido eu ganho 1 ponto na carteira
//Se o motorista obtiver mais de 12 pontos deverá ser exibido 'Licença suspensa'

const limiteMaximo = 70;
const mensagemOk = 'Ok';
const mensagemLicencaSuspensa = 'Licença suspensa';
const kmPorPonto = 5;

function checarVelocidade (velocidade) {
  if (velocidade < limiteMaximo + kmPorPonto){
    return mensagemOk;
  }
  else {
    let pontosCarteira = Math.floor((velocidade - limiteMaximo) / kmPorPonto);
    if (pontosCarteira >= 12) {
      return mensagemLicencaSuspensa;
    } else {
      return 'Pontos: ', pontosCarteira;
    }
  }
}

let resultado = checarVelocidade(80);
console.log(resultado);