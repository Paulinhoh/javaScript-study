//----------------------- aritmética e precedencia ---------------------------------
// operadores básicos: + - * /
// precedencia: (), */, +-

// media => soma dos termos / quantidade dos termos
const media = (10 + 10 + 10) / 3;
console.log(media);

// ----------------------- atribuições -------------------------------------
// contadores...
// num = num + 1

let num = 0;
// num = num + 1; -> num++
// num++; -> retorna e depois atribui
// num--; -> retorna e depois atribui
// ++num; -> atribui e depois retorna
// --num; -> atribui e depois retorna
console.log("num ", ++num);

// += -= *= /=
num += 2;
num -= 2;
num *= 2;
num /= 2;

console.log("num ", num);

// ------------------------- operadores lógicos ----------------------------------------
// E   -> &&
// Ou  -> ||
// Não -> !

// &&
console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true

// ||
console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true

// precedencia: (), &&, ||, !
