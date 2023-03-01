const entrada = require("prompt-sync")({ sigint: true });

/*
  Funções ajudam a organizar e centralizar códigos
  - Dividir e estruturar um algoritmo em partes lógicamente coerentes
  - Facilitar o teste em trechos separados
  - Criar uma biblioteca própria
  - Aumentar a legibilidaade do código
  - Evitar repetição de código
*/

// Exemplo 01
function somar(a, b) {
  // outros códigos aqui
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

var n1 = Number(entrada("Número 01: "));
var n2 = Number(entrada("Número 02: "));
var op = entrada("Qual a operação [+] or [-]: ");

var resultado;

if (op == "+") {
  resultado = somar(n1, n2);
} else if (op == "-") {
  resultado = subtrair(n1, n2);
}

console.log(resultado);
//---------------------------------------------------
