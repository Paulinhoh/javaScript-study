const entrada = require("prompt-sync")({ sigint: true });

/*
  igual           -> ==
  diferente       -> !=
  menor           -> <
  maior           -> >
  menor e igual   -> <=
  maior e igual   -> >=
*/

var valor1 = parseInt(entrada("Digite um valor: "));
var valor2 = parseInt(entrada("Digite outro valor: "));

var igual = valor1 == valor2; // retorno true or false
var diferente = valor1 != valor2;
var maior = valor1 > valor2;
var maiorIgual = valor1 >= valor2;
var menor = valor1 < valor2;
var menorIgual = valor1 <= valor2;

console.log(`${valor1} == ${valor2} : ${igual}`);
console.log(`${valor1} != ${valor2} : ${diferente}`);
console.log(`${valor1} > ${valor2}: ${maior}`);
console.log(`${valor1} >= ${valor2} : ${maiorIgual}`);
console.log(`${valor1} < ${valor2}: ${menor}`);
console.log(`${valor1} <= ${valor2} : ${menorIgual}`);

/*
  && (e)   -> tem que ser os dois true para ser true
  || (ou)  -> se pelo menos 1 for true o resultado é true
  !  (não) -> retorna o negativo do resultado true == false e false == true
  Precedencia -> (), &&, ||, !
*/