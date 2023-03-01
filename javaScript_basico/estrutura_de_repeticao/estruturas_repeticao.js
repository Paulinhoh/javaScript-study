// --------------------------- while ------------------------------
// let contador = 0;

// while (contador < 10) {
//   console.log(`while ${contador}`);
//   contador++;
// }

// ---------------------------- for -------------------------------
// for (let i = 0; i < 8; i++) {
//   console.log(`for ${i}`);
// }

// ---------------------------- for of ------------------------------
// const nomes = ["Felipe", "Ana", "Bianca"];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// for (const nome of nomes) {
//   console.log(nome);
// }

// ---------------------------- for in ------------------------------
const person = {
  name: "Paulinho",
  age: 21,
};

//obj.prop
//obj["prop"]
for (const prop in person) {
  console.log(`prop: ${prop} - ${person[prop]}`);
}
