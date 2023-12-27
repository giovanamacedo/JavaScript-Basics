//break
let z = 0;
while (z <= 10) {
  
  //para de imprimir no 4
  if (z === 5) {
    break;
  }

  console.log(z);
  z++;
}

//continue
let i = 0;
while (i <= 10) {

  //imprime apenas os números primos até 10
  if (i % 2 === 0) {
    i++;
    continue;
  }

  console.log(i);
  i++;
}