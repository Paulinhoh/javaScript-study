// ------------------- Var ---------------------------
// variaveis globais acessivel em qualquer scoopo
// var é quivalente a "variavel global"
var x = 10;
console.log("x", x);
{
  console.log("x", x);
  x = 20;
  var y = 30; // variavel local, mas tb é acessivel fora do scoopo
}
console.log("x", x);
console.log("y", y);

// ------------------- Let ---------------------------
// mais recomendado o uso do let do que do var
let x = 10; // variavel global, pode ser acessada de qualquer scoopo
console.log("x", x);
{
  console.log("x", x);
  x = 20;
  let y = 30; // variavel local, só pode ser acessada no scoopo que foi criada
}
console.log("x", x);
console.log("y", y);

// ------------------- Const ---------------------------
// const funciona da mesma forma que o let só que a variavel depois de criada n pode ser alterada
const x = 10;
console.log("x", x);
{
  console.log("x", x);
  const y = 30;
}
console.log("x", x);

// ------------------- Names and Rules ---------------------------
// não podem conter espaços
let nomeCompleto;
let nome_completo;
// precisão iniciar com uma letra, _ ou $
let num1 = 10;
// podem conter apenas letras, numeros, _ ou $
// case-sensitive
let name;
let Name;
let NAME;
// não podem utilizar palavras reservadas ()
