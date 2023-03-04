// -------------------- Type casting vs Type coersion --------------------
// Type casting = converção pelo usuario
// Type coersion = converção "coercitiva" pela VM

// console.log("2" + 2); // 22
// console.log(Number("2") + 2); // 4

// -------------------- Number <-> String ------------------------------
// "2" <-> 2

// console.log(typeof Number("2"));
// console.log(typeof String(2));

// console.log(Number("a")); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// -------------------- Number <-> String ------------------------------
// '' <-> false
// "2" <-> true
// 0 <-> false
// 1 <-> true

// console.log(Boolean(""));
// console.log(Boolean("abc"));
// console.log(Boolean(0));
// console.log(Boolean(1));

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// console.log(String(true)); // "true"
// console.log(String(false)); // "false"

// -------------------- String <-> Date ------------------------------
// "30/02/2022" <-> Date

// console.log(new Date("04/30/2022"));
// console.log(new Date("2022-04-30"));
// console.log(new Date("2022 04 30"));

// console.log(new Date().toString());
// console.log(new Date().toISOString());

// -------------------- String <-> Array ------------------------------
// "Paulinho" <-> Array
// let name = "Paulo Henrique";

// console.log(name[0]); // P

// for (const v of name) {
//   console.log(v);
// }

// console.log(name.length);

// console.log(name.split(" "));

// let values = [1, 2, 3, 4, 5, 10, 20];
// console.log(values.join());

// -------------------- Casas decimais, formatação e arredondamento ------------------------------
// toFixed()
// Math.ceil()
// Math.floor()
// Math.round()
// new Intl.NumberFormat().format()
// let value = 1234.59;

// console.log(value.toFixed(1));
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));
// console.log(
//   new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   }).format(value)
// );

// -------------------- Contando digitos ------------------------------
// let name = "Paulinho";
// let num = 12345;

// console.log(name.length);
// console.log(String(num).length);

// -------------------- Separando e juntando Strings ------------------------------
// let frase = "Eu sou um cara legal";

// console.log(frase.split(" ").join("-"));

// -------------------- Maiusculas e Minusculas ------------------------------
// let frase = "Viver é maravilhoso";

// console.log(frase.toLowerCase());
// console.log(frase.toUpperCase());

// // Paulinho  paulinho  PAULINHO pAulinho -> nivelar nomes no banco de dados
// console.log("pAulinho".toUpperCase());

// -------------------- Localizando Strings ------------------------------
// let frase = "Paulo é um cara legal!";

// console.log(frase.includes("!")); // true
// console.log(frase.includes("paulo")); // false
// console.log(frase.includes("Paulo")); // true
// console.log(frase.toLowerCase().includes("paulo")); // true

// -------------------- Substituindo Strings ------------------------------
// let frase = "Paulo era um cara legal!";

// console.log(frase.replace("Paulo", "Jonny"));

// let value = 1234.556;
// console.log(value.toFixed(2).replace(".", ","));

// -------------------- Convertendo JSON ------------------------------
// JSON - JavaScript Object Notation
// JSON.stringify()
// JSON.parse()
const people = [
  {
    id: 1,
    name: 'Paulo',
    lastName: 'Henrique',
    bornDate: new Date(2001, 6, 31),
    address: {
      city: 'San Francisco',
    },
  },
  {
    id: 2,
    name: 'Eduarda',
    lastName: 'Reis',
    bornDate: new Date(2005, 4, 09),
    address: {
      city: 'Los Angeles',
    },
  },
];

console.log(JSON.stringify(people)); // converção de objeto para string
console.log(JSON.parse()); // converte de string para objeto
