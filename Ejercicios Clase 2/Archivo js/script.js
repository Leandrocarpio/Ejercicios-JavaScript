//Crear un archivo .js. Imprimir mensajes en la consola con console.log().

console.log("mensaje en consola y js creado")

//1 Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.

let nombre = "Diego"
console.log(nombre)

//2 Declara y suma dos números, muestra el resultado en consola.

const numero1 = 10
const numero2 = 15
const resultado = numero1 + numero2
console.log(resultado)

//3 Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.

const resulta2 = (10 > 5 &&  5 > 2) 
console.log (resulta2) //el resultado es verdadero, se cumple

//4 Declara variables con let y const y nota las diferencias al intentar cambiarlas.

let edad = 31;
console.log("edad incial" , edad)

edad = 35;
console.log("nueva edad declarada: " , edad)

let ciudad = "Chile";
console.log("primer ciudad:", ciudad )

ciudad = "Argentina";
console.log("Nueva ciudad declarada:", ciudad)

//5 Escribe un comentario que explique qué hace tu código.

// el comentario se describe con doble barra inclinada.

//6 Declara una variable de tipo boolean y úsala en una operación lógica.

const tienePermiso = true; // variable tipo boolean

if (tienePermiso && 10 > 5) { //la utilizamos en una operacion logica
  console.log("Acceso permitido: condición cumplida");
} else {
  console.log("Acceso denegado");
}

//7 Imprime el tipo de dato de una variable usando typeof. (en consola se muestra el tipo de variable)

// STRING: texto entre comillas
const nombre2 = "Mauricio";
console.log(typeof nombre); // "string"

// NUMBER: número entero o decimal
const edad2 = 31;
console.log(typeof edad); // "number"

// BOOLEAN: verdadero o falso
const esMayor = true;
console.log(typeof esMayor); // "boolean"

//8 Declara un array y muestra uno de sus elementos en la consola.

const nombres = ["Seba", "Mauricio", "Pedro"];
console.log("Se muestra el nombre en la posicion 1", nombres[1]);

//9 Usa una operación con % para encontrar el resto de 17 ÷ 3.

const resto = 17 % 3 ; 
console.log("El resto de 17 % 3 es: ", resto)

//10 Declara una variable sin valor e imprime su valor inicial.

let animal
console.log("Se declara una variable sin valor: " ,animal)

