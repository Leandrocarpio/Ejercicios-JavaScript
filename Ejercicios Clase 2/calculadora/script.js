console.log("Hello, World!");


let nombre = "Diego";
const edad = 32;

console.log("Mi nombre es " + nombre + " y tengo " + edad + " años.");



if (edad >= 18) {
    console.log(nombre + " es mayor de edad.");
}else {
    console.log(nombre + " es menor de edad.");
}       
//comentario de una sola línea

/*
comentario
de varias
líneas
*/



let suma = 2 + 7;
console.log("La suma de 2 y 7 es: ", suma);


console.log(typeof suma); // Muestra el tipo de dato de la variable suma

let dia = 7;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
        break;
}


for (let i = 0; i <= 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0
while (i <= 5) {   
    console.log( + i);
    i++;
}

// --- Calculadora básica en consola ---

// Función para sumar
function sumar(a, b) {
  return a + b;
}

// Función para restar
function restar(a, b) {
  return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir (con control de error)
function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir por cero.";
  }
  return a / b;
}


// ejercicio n3  Evaluación de condiciones con operadores lógicos

let condicion1 = 10 > 5;  
let condicion2 = 5 < 2;   
let resultado = condicion1 && condicion2;

console.log("¿Es verdad que 10 > 5 Y 5 < 2:", resultado);
console.log("Primera condición (10 > 5):", condicion1);
console.log("Segunda condición (5 < 2):", condicion2);


//funciones

function saludar(nombre) {
    console.log("Hola, " + nombre);
}
saludar("Diego"); 




let animales = "perritos";
function abrazar(animales) {
    console.log("hoy quiero abrazar " + animales);
}

abrazar(animales);

function años (edad) {
    console.log("Tengo " + edad + " años");
}

años(edad);

function despedirse(nombre) {
    console.log("Adiós, " + nombre);
}

despedirse(nombre);


const sume = function(a, b) {
    return a + b;
}

console.log(sume(5, 3));

const multiplicare = function(a, b) {
    return a * b;
}
console.log(multiplicare(2, 2));



const derivada = (x) => x*x;
console.log(derivada(5)); 



//1.Declara una función que calcule el área de un triángulo.

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(areaTriangulo(5, 10));

//2.Crea una función anónima que determine si un número es par o impar.

const esPar = function(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    } 
};
//3.Usa una función de flecha para multiplicar dos números.

const multiplicar2 = (a, b) => a * b;

console.log(multiplicar2(4, 3));

//4. Escribe una función que convierta una palabra a mayúsculas.

function convertirAMayusculas(palabra) {
    return palabra.toUpperCase();
}
console.log(convertirAMayusculas("hola"));

//5.Haz una función que reciba dos números y retorne el mayor de ellos.
function mayorNumero(a, b) {
    if (a > b) {
        return a + " es mayor que " + b;
    } else if (b > a) {
        return b + " es mayor que " + a;
    } else {
        return "Ambos números son iguales.";
    } 
}
console.log(mayorNumero(7, 10));

//6.Crea una función que invierta una cadena.

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
} 
console.log(invertirCadena("Hola Mundo"));

//7.Declara una función que convierta grados Celsius a Fahrenheit.
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
} 
console.log(celsiusAFahrenheit(25));

//8.Escribe una función que verifique si una palabra es un palíndromo.
function esPalindromo(palabra) {
    const palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida;
}
console.log(esPalindromo("radar"));

//9.Haz una función que calcule la suma de los números de un arreglo.

function sumaArreglo(arr) {
    let suma = 0; 
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    } 
    return suma;
}
console.log(sumaArreglo([1, 2, 3, 4, 5]));

//10.Usa funciones para simular una calculadora básica.
function sumar(a, b) {
    return a + b;
} 
function restar(a, b) {
    return a - b;
} 
function multiplicar(a, b) {
    return a * b;
}       
function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir por cero.";
    } 
    return a / b;
}
console.log(sumar(10, 5)); 
console.log(restar(10, 5)); 
console.log(multiplicar(10, 5)); 
console.log(dividir(10, 3)); 
console.log(dividir(10, 2));



// Obtener referencias a los elementos del DOM
const titulo = document.getElementById('titulo');
const parrafo = document.getElementById('parrafo');
const botonCambiar = document.getElementById('botonCambiar');

// Crear un array de colores para el fondo
const colores = ['#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C'];
let indiceColor = 0;

// Función que se ejecutará cuando se haga clic en el botón
botonCambiar.addEventListener('click', function() {
    // Cambiar el texto del título
    titulo.textContent = '¡Título Cambiado!';
    
    // Cambiar el color de fondo del párrafo
    parrafo.style.backgroundColor = colores[indiceColor];
    
    // Actualizar el índice del color para el siguiente clic
    indiceColor = (indiceColor + 1) % colores.length;
});





































