// ----------------------------- if ------------------------------------
if (1 === 1) {
  console.log("verdadeiro");
}

// ----------------------------- if else ------------------------------------
if ("1" === 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

if (1 === 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

// ----------------------------- if else ------------------------------------

const entrada = require("prompt-sync")({ sigint: true });

let peso = Number(entrada("Qual o seu peso: "));
let altura = Number(entrada("Qual a sua altura: "));

imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else {
  console.log("Acima do peso");
}

// ------------------------------ ternario -----------------------------
let texto = "A";
let valor;

// variavel = (condicao) ? (se) : (senao)
valor = texto === "A" ? 10 : 20;
console.log(valor);

// execução de comando via ternario
texto == "B" ? console.log("SE") : console.log("SENÃO");

// ---------------------------- switch case ----------------------------
let variavel = 4;

switch (variavel) {
  case 1:
    console.log("valor 1");
    break;
  case 2:
    console.log("valor 2");
    break;
  default:
    console.log("condição default");
    break;
}

// ---------------------------- try catch --------------------------------------

try {
  // executa algo...
  // consulta de API, Banco de dados, arquivos
  console.log("Consutando o banco de dados");

  // con.select("clientes") // ponto de falha
  throw "erro 1032 ao conectar com o banco de dados";

  console.log("outro comando");
} catch (error) {
  // erro
  console.error(error);
} finally {
  // sempre executa ao final (opcional)
  console.log("execução final");
}
