// ----------------------------- Funções -------------------------
function sayHello(name, lastName) {
  console.log(`Olá ${name} ${lastName}. Bem vindo!!`);
  //...
}

sayHello('Paulo', 'Henrique');

// ----------------------------- Retorno -------------------------
function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(2, 3);
console.log(resultado);

// ----------------------------- Objeto arguments -------------------------
function soma() {
  // arguments
  let res = 0;

  for (const n of arguments) {
    res += n;
  }

  return res;
}

console.log(soma(2, 3, 7, 23, 8));

// ----------------------------- Valor vs Referência -------------------------
function mult(n) {
  let res = n;
  res *= n;
  return res;
}

let numVal = 10; // é passado somente o valor
console.log(mult(numVal));
console.log(numVal);

function multObj(obj) {
  obj.value *= obj.value;
  return obj.value;
}

const numObj = { value: 10 }; // é passado como referência
console.log(multObj(numObj));
console.log(numObj.value);

// ----------------------------- Function scoped -------------------------
console.log(mult(10));

const mult = function (n) {
  n *= n;
  return n;
};

// ----------------------------- Arrow functions -------------------------
const mult = (n) => (n *= n);

console.log(mult(10));

// ----------------------------- Callbacks --------------------------------
function mult(values, func) {
  for (let i = 0; i < values.length; i++) {
    // values[i] *= values[i]; // n *= n
    values[i] = func(values[i]);
  }

  return values;
}

let values = [1, 2, 3, 4, 10];
const func = (n) => n * n;
// callback: map() filter() reduce()

console.log(mult(values, func));
