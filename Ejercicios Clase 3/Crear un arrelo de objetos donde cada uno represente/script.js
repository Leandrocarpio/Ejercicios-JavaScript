//1. Crea un arreglo con 5 números y muestra el tercero en consola.
let numeros = [4, 8, 15, 16, 23];
console.log(numeros[2]); // 15

//2. Agrega un nuevo elemento a un arreglo usando push.
numeros.push(42);
console.log(numeros);

//3. Elimina el último elemento de un arreglo y muéstralo en consola.
let ultimo = numeros.pop();
console.log("Elemento eliminado:", ultimo);
console.log("Arreglo actualizado:", numeros);

//4. Usa map para multiplicar por 2 cada número de un arreglo.
let duplicados = numeros.map(num => num * 2);
console.log(duplicados);

//5. Filtra un arreglo para obtener solo los números mayores a 10.
let mayoresA10 = numeros.filter(num => num > 10);
console.log(mayoresA10);

//6. Declara un objeto con las propiedades nombre, edad y profesión.
let persona = { nombre: "Ana", edad: 30, profesion: "Programadora" };

//7. Accede y muestra el valor de una propiedad de un objeto.
console.log(persona.nombre);

//8. Agrega un método a un objeto que devuelva un saludo personalizado.
persona.saludar = function() {
  return `Hola, soy ${this.nombre} y soy ${this.profesion}`;
};
console.log(persona.saludar());

//9. Usa reduce para sumar todos los números de un arreglo.
let suma = numeros.reduce((acum, num) => acum + num, 0);
console.log("Suma total:", suma);

//10. Combina arreglos y objetos: crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.
let frutas = [
  { nombre: "Manzana", color: "Rojo" },
  { nombre: "Banana", color: "Amarillo" },
  { nombre: "Uva", color: "Morado" }
];

frutas.forEach(fruta => console.log(fruta.color));
