# Tipagem

O JavaScript é uma linguagem facramente tipada, isso significa que "ele"tentará converter em tempo de execução o dado baseado no valor

Exemplos:

```javascript
1;
1.2;
("Felipe");
true;
```

Atualmente existem maneiras de "forçar" o tipo, e até formas de utilizar linguagens / supersets focadas nisso como o TypeScript.

Isso é um ponto de atenção importante dentro do JS, já que a depender do valor daa variavel o seu programa pode "dar bugs" em função de tipos inesperados. E para isso utilizaremos artificios como o de comparador idêntico.

```javascript
console.log("1", typeof 1); // -> number
console.log("1.2", typeof 1.2); // -> number
console.log("Felipe", typeof "Felipe"); // -> string
console.log("1", typeof "1"); // -> string
console.log("true", typeof true); // -> boolean

console.log("2" + 2); // -> string + number == string
```
