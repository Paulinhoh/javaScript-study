const entrada = require("prompt-sync")({ sigint: true });

console.log("=====================================================");
console.log("");
// ----------------------------------------------------------------------

// Exemplo 01
var idade = parseInt(entrada("Informe sua idade: "));

if (idade >= 18) {
  console.log("Maior de idade");
  console.log("Acesso Autorizado");
} else {
  console.log("Menor de idade");
  console.log("Acesso Negado");
}

console.log("");
console.log("=====================================================");
console.log("");
// ----------------------------------------------------------------------

// Exemplo 02
var idioma = entrada(
  "Escolha entre as seguintes linguagens [pt] [en] [fr] [es]: "
).toLowerCase();

if (idioma == "pt") {
  console.log("Olá");
} else if (idioma == "en") {
  console.log("Hi");
} else if (idioma == "fr") {
  console.log("Salut");
} else if (idioma == "es") {
  console.log("Hola");
} else {
  console.log("Idioma invalido");
}

console.log("");
console.log("=====================================================");
console.log("");
// ----------------------------------------------------------------------

// Exercicio 03
var idioma = entrada(
  "Escolha entre as seguintes linguagens [pt] [en] [fr] [es]: "
).toLowerCase();

if (idioma == "pt") {
  var variacao = entrada("Escolha a variação [br] or [pt]: ").toLowerCase();
} else if (idioma == "en") {
  var variacao = entrada("Escolha a variação [us] or [gb]: ").toLowerCase();
}

if (idioma == "pt" && (variacao == "br" || variacao == "pt")) {
  console.log("Olá");
} else if (idioma == "en" && variacao == "us") {
  console.log("Hi");
} else if (idioma == "en" && variacao == "gb") {
  console.log("Hello");
} else if (idioma == "fr") {
  console.log("Salut");
} else if (idioma == "es") {
  console.log("Hola");
} else {
  console.log("Idioma invalido");
}

console.log("");
console.log("=====================================================");
console.log("");
// ----------------------------------------------------------------------