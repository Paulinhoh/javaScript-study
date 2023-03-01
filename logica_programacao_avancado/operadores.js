// npm install prompt-sync
const entrada = require("prompt-sync")({ sigint: true }); // Biblioteca para receber dados pelo terminal

/*
  soma          (+) -> +
  subtração     (-) -> -
  multiplicação (x) -> *
  divisão       ( ) -> /
*/

var valor1 = parseInt(entrada("Digite o valor 1: "));
var valor2 = parseInt(entrada("Digite o valor 2: "));

soma = valor1 + valor2;
subtração = valor1 - valor2;
multiplicacao = valor1 * valor2;
divisao = valor1 / valor2;

console.log(`O resultado da soma é ${soma}`);
console.log(`O resultado da subtração é ${subtração}`);
console.log(`O resultado da multiplicação é ${multiplicacao}`);
console.log(`O resultado da divisão é ${divisao}`);

// Tabela Básica de Precedência
/*
  Grupos         -> ()
  Exponenciação  -> **
  Multiplicação  -> *
  Divisão        -> /
  Soma           -> +
  Subtração      -> -
*/
