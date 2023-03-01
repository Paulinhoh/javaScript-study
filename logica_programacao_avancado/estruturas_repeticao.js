const entrada = require("prompt-sync")({ sigint: true });

// Exercicio 01
var contador = parseInt(entrada("Digite um valor: "));

while (contador > 0) {
  console.log(contador);
  contador--;
}
//-------------------------------------------------------
