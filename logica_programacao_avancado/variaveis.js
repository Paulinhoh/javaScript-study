const entrada = require("prompt-sync")({ sigint: true });

// Tipos de variaveis
/*
  string  -> "algum texto"
  int     ->  1  2  3  75
  float   ->  1.5  3.8
  boolean -> true or false
*/

// exibir os dados na tela: alert()
// ler os dados do teclado: prompt()

var peso = parseInt(entrada("Digite o seu peso: "));
var altura = parseFloat(entrada("Digite a sua altura: "));

imc = peso / altura ** 2;

console.log(`Taxa IMC: ${imc.toFixed(1)}`);
