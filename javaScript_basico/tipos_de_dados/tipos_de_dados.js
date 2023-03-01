// --------------------- STRINGS -----------------------------------
console.log("Paulinho");
console.log("Paulo Henrique");
console.log("São Cristovão");

console.log("Outro texto");

console.log('Esc"ape'); // \" ou \' para utilizar dentro das aspas ""  ou ''

// --------------------- NUMBER ------------------------------------
console.log(1, typeof 1);
console.log(1.2, typeof 1.2);
console.log(0.12);
// O javascript entende os tipo int ou float como number

console.log(Math.PI);
console.log(Math.E);

// --------------------- BOOLEAN ------------------------------------
console.log(true);
console.log(false);

// --------------------- INFINITY ------------------------------------
console.log(Infinity);
console.log(1 / 0);
console.log(typeof Infinity);

// --------------------- NaN ------------------------------------
console.log(NaN);
console.log("A" / 2);
console.log(typeof NaN);

// --------------------- NULL e UNDEFINED ------------------------------------
console.log(null); // ausencia de valor
console.log(undefined); // indefinido
console.log(typeof null);
console.log(typeof undefined);
// null é diferente de undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// --------------------- OBJECT -------------------------------------------
console.log({ propriedade: "valor" });
console.log({
  nome: "Paulo",
  idade: 21,
  endereco: {
    rua: "Panificador Silva",
    numero: 46,
    complemento: "Casa 1",
    bairro: "Roza Elze",
  },
});

// --------------------- ARRAY -------------------------------------------
console.log([1, 2, 3]);
console.log(["A", "B", 3]);
console.log([1, "A", { nome: "Paulo", sobrenome: "Henrique" }]);

// --------------------- DATE -------------------------------------------
console.log(Date()); //data e hora corrente -> new Date()
console.log(new Date()); // data e hora corrente
console.log(new Date(2022, 3, 22)); // data especifica e hora corrente
console.log(new Date(2022, 3, 22, 10, 20, 59)); // data e hora especifica
