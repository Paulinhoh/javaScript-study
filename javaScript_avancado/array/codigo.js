// ------------------------ Métodos basicos de manipulação ---------------------------
let people = ['Felipe', 'André', 'Paulo', 'Joony', 'Marcelo'];
// 0 -> n
// 5 elementos --> people.length

// retornar elementos especificos de um array
console.log(people[2]);
console.log(people[people.length - 1]);

// retornar "fatias" de um array
console.log(people.slice(2));
console.log(people.slice(1, 3));

// adiconar novos elementos no array (inicio fim)
people.push('Ana'); // adiciona no final do array
people.unshift('Maria'); // adiciona no início do array

console.log(people);

// remover elementos no array (inicio fim)
people.pop(); // remover no final do array (e retorna o elemento removido)
people.shift(); // remover no início do array

console.log(people);

// remover "fatias" de um array
people.splice(1, 2);
console.log(people);

// localizar elementos
let index = people.indexOf('Jonny');
people.splice(index, 1);

console.log(people);

// ------------------------ Concatenação ---------------------------
let set1 = [1, 2, 3, 4, 5];
let set2 = [6, 7, 8, 9, 10];
let set3 = [11, 12];

console.log(typeof set1 + set2); // na pratica cria uma string

console.log([set1, set2]); // cria um novo array com 2 sub-arrays dentro

console.log(set1.concat(set2).concat(set3)); // concatena os elementos de set1 e set2

// ------------------------ Desestruturação ---------------------------
let set = [1, 2, 3, 4, 5];

let [n1, n2] = set; // 1, 2
console.log('n1', n1); // number
console.log('n2', n2); // number

function myFunction() {
  const x = 10;
  const y = 400;
  return [x, y];
}

const [x, y] = myFunction();
console.log('x', x); // number == 10
console.log('y', y); // number == 400
