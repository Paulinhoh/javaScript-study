// ------------------------ Filter ------------------------------
const numbers = [10, 18, 1, 15];

let res = numbers.filter((item) => item > 10);
console.log(res);

const people = [
  { name: 'Duda', gender: 'F', age: 17 },
  { name: 'Paulo', gender: 'M', age: 21 },
  { name: 'Amanda', gender: 'F', age: 18 },
];

const acimaDe18 = people.filter((p) => p.age >= 18);
console.log(acimaDe18);

const alistamento = people.filter((p) => p.age >= 18 && p.gender === 'M');
console.log(alistamento);

// -------------------------- Map ------------------------------
const numbers1 = [1, 2, 3, 4, 5];
const double1 = numbers1.map((n) => n * 2);
console.log(double1);

const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];
const celcius = fahrenheit.map((f) => Math.round(((f - 32) * 5) / 9));
console.log(celcius);

const people1 = [
  { name: 'felipe', age: 40 },
  { name: 'aManda', age: 14 },
  { name: 'Duda', age: 18 },
];
const peopleNormalized = people1.map((p) => p.name.toUpperCase());
console.log(peopleNormalized);

// ------------------------ Reduce ------------------------------
// Ref. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// array.reduce(callback[, initialValue])
//
// callback - Função que é executada em cada valor no array, recebe quatro argumentos:
//   acumulator - O valor retornado na última invocação do *callback*, ou o argumento Valor Inicial, se fornecido.
//   currentValue - O elemento atual que está sendo processado no array.
//   indice - O índice do elemento atual que está sendo processado no array.
//   array - O array ao qual a função reduce foi chamada.
// initialValue - Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback.

let values = [1.5, 2, 4, 10];
function callback(acumulator, currentValue, index, array) {
  console.log(`acumulator`, acumulator);
  console.log(`currentValue`, currentValue);
  console.log(`index`, index);
  console.log(`array`, array);
  console.log('---');

  // return acumulator
}
values.reduce(callback, 0);

// Agregação
let sum = values.reduce((total, item) => total + item, 0);
console.log('sum', sum);

let avg = values.reduce(
  (total, item, index) => (total + item) / (index + 1),
  0
);
console.log('avg', avg);

// Map
let double = values.reduce((total, item) => total.concat(item * 2), []);
console.log('double', double);

// Filter
let newValues = values.reduce((total, item) => {
  if (item > 2) {
    total.push(item);
  }
  return total;
}, []);
console.log('newValues', newValues);

// O que eu tenho?
const itens = [ 
  { description: 'pen', quantity: 1, price: 3 },
  { description: 'rule', quantity: 2, price: 5 },
  { description: 'erase', quantity: 2, price: 6 },
];

// O que eu espero: 25

const total = itens.reduce((acc, item) => acc + item.quantity * item.price, 0);

console.log(total);
