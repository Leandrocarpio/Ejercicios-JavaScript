//ejercicio 1

function cambiarTexto() {
    const elemento = document.getElementById("titulo");
    elemento.textContent = "Texto modificado";
  }

//ejercicio 2

function cambiarColor() {
    document.body.style.backgroundColor = "lightblue";
  }

//erjercico 3

function cambiarTextoClase() {
    const elemento = document.querySelectorAll(".TEXTO3");
    elemento.forEach(function(el) {
      el.textContent = "Texto modificado en todos los elementos";
    });
  } 

//ejercicio 4

function agregarClase() {
    const elemento = document.getElementById("subtitulo");
    elemento.classList.add("resaltado");
  }


//ejercicio 5

function eliminarClase() {
  const elemento = document.getElementById("subtitulo5");
  elemento.classList.remove("subtitulo2");
}

//ejercicio 6

function cambiarContenido() {
  const div = document.getElementById("miDiv");
  div.innerHTML = "nuevo texto usando innerHTML";    
    
}

//ejercicio 7

function mostrarTexto() {
  const parrafo = document.getElementById("miParrafo");
  console.log(parrafo.textContent);
}

//ejercicio 8

function modificarh6() {
  const elementos = document.querySelectorAll("h6");
  elementos.forEach(function(el) {
    el.textContent = "Modificado con bucle";
  });
}               

//ejercicio 9

function ocultarParrafo() {
  const parrafo = document.getElementById("parrafos");
  parrafo.style.display = "none";
}

//ejercicio 10

function agregarElemento() {
  // 1. Crear el nuevo elemento
  const nuevoParrafo = document.createElement("p");

  // 2. Agregar contenido al nuevo elemento
  nuevoParrafo.textContent = "Este es un nuevo párrafo agregado dinámicamente.";

  // 3. Seleccionar el contenedor existente
  const contenedor = document.getElementById("contenedor");

}





























