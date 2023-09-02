function verificarNumero() {
  const numero = parseInt(prompt('Digite um número:'));
  if(numero > 0 && numero <= 10 && numero % 2 === 0 && Number.isInteger(numero)){
    return "correto: número é par, inteiro e está entre 1e 10."; 
  } else {
    return 'incorreto: o número não atende aos critérios.'; 
  }
}

const resultado = verificarNumero();
console.log(resultado);
