//for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//for in
const pessoa = {
  nome: 'Giovana',
  idade: 21
};

for (let key in pessoa) {
  console.log(key, pessoa[key]);
}
//nome Giovana
//idade 21

const cores = ['Rosa', 'Vermelho', 'Roxo'];
for (let index in cores) {
  console.log(index, cores[index]);
}
//0 Rosa
//1 Vermelho
//2 Roxo

//For of
const nomes = ['Giovana', 'Mateus', 'Kiara'];
for (let nome of nomes){
  console.log(nome);
}
//Giovana
//Mateus
//Kiara