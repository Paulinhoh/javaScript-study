// ----------------------- let var -----------------------------------
let x; // undefined
console.log("x", x);

x = 10;
console.log("x", x);
console.log("x", typeof x);

x = "A";
console.log("x", x);
console.log("x", typeof x);

let y = 20; // declaration assignment var / let
console.log("y", y);

// --------------------------- agrupamento de declarações -------------------
let nome = "Paulinho",
  age = 21;

console.log("name:", nome);
console.log("age:", age);

// --------------------------- concatenação e interpolação ----------------------
let nome1, age1;

nome1 = "Paulinho";
age1 = 21;

let address = {
  street: "Rua 123",
  city: "San Francisco",
};

console.log("name:", nome1);
console.log("age:", age1);

// concatenação (antiga)
console.log(nome1 + " tem " + age1 + " anos");

// interpolação
console.log(`${nome1} tem ${age1} anos`);
console.log(
  `${nome1} tem ${age1} anos e reseide em ${JSON.stringify(address)}`
);

// ------------------------ Object -----------------------------------

const person = {
  name: "Paulinho",
  age: 21,
  address: {
    street: "Rua 123",
    city: "San Francisco",
  },
};

person.name = "Paulo Henrique";
person.hairColor = "black";

console.log(person);
console.log(
  `${person.name} tem ${person.age} anos e reside na ${person.address.street} em ${person.address.city}`
);

// --------------------------- Array -----------------------------------

const person1 = "Paulo";
const person2 = "Eduarda";
const person3 = "Bianca";
// ...
const person999 = "John";

console.log(person1);
console.log(person2);
console.log(person3);
// ...
console.log(person999);

// variavel + indice
const persons = ["Felipe", "Ana", "Paulinho"];
const people = [
  { name: "Felipe", age: 20 },
  { name: "Ana", age: 18 },
  { name: "Paulinho", age: 21 },
];

persons[0] = "Pedro";
persons[3] = "Maria";

console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);
console.log(people[2]);
console.log(persons);
console.log(persons.length);

// -------------------------- Date ----------------------------
// const bornfDay = new Date();
// const bornfDay = new Date(2001, 06, 31, 3, 59, 0);
// const bornfDay = new Date("July 31 2001 03:59:00");
const bornfDay = new Date("2001-07-31T06:59:00.000Z");
const today = new Date();

console.log(bornfDay);
console.log(bornfDay.toISOString());

console.log("dia", bornfDay.getDate());
console.log("mes", bornfDay.getMonth());
console.log("ano", bornfDay.getFullYear());

console.log("Idade: ", today.getFullYear() - bornfDay.getFullYear());
