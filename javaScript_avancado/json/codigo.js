const person = {
  name: "Paulo Henrique",
  age: 21,
  address: {
    street: "Rua Panificador Silva",
    number: "46",
    complement: "Casa 1",
    district: "Roza Elze",
    city: "São Cristovão",
    state: "Sergipe",
  },
};

// console.log("" + person);

const personStr = JSON.stringify(person);
// console.log(personStr);

const personObj = JSON.parse(personStr);
console.log(personObj);
