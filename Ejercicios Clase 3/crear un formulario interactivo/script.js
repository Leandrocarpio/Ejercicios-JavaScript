 const campoTexto = document.getElementById("campoTexto");
        const mensajeError = document.getElementById("mensajeError");
        const formulario = document.getElementById("miFormulario");
        const mensajeExito = document.getElementById("mensajeExito");

        // Validación en tiempo real
        campoTexto.addEventListener("input", () => {
            if (campoTexto.value.trim() === "") {
                mensajeError.textContent = "Este campo no puede estar vacío.";
            } else {
                mensajeError.textContent = "";
            }
        });

        // Mensaje de confirmación al enviar
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();
            if (campoTexto.value.trim() === "") {
                mensajeError.textContent = "Por favor, completa el campo antes de enviar.";
            } else {
                mensajeExito.style.display = "block";
                formulario.reset();
            }
        });


//1. Crea un botón que muestre un mensaje en consola al hacer clic.

const boton = document.createElement("button");
boton.textContent = "Boton en consola";
document.body.appendChild(boton);
boton.addEventListener("click",() =>  {
    console.log("Boton clickeado estas en consola");
});

//2. Haz que un campo de texto cambie su color de fondo al escribir en el 

const input = document.getElementById("campoTexto");
input.addEventListener("input",() => {
    input.style.backgroundColor= "lightyellow"
});


//3.Implementa un contador que aumente cada vez que se haga clic en un boton

let contador = 0;
const contadorBtn= document.createElement("button");
contadorBtn.textContent= "incrementar";
document.body.appendChild(contadorBtn);
contadorBtn.addEventListener("click", () => {
    contador++;
    console.log("Contador:", contador)
});

//4.Muestra un mensaje de error si un campo de texto está vacio al enviar un formulacio.( incluido en la actividad practica1)

//5.Cambiar la posicion de un elemento cuando se pase el raton sobnre él.

const elemento = document.createElement("div");
elemento.textContent = "pasa el ratón sobre mí";
elemento.style.position = "absolute";
elemento.style.top = "50xp";
elemento.style.left = "50xp"; 
document.body.appendChild(elemento);

elemento.addEventListener("mouseover", () => {
    elemento.style.top = `${Math.random() * 500}px`;
    elemento.style.left = `${Math.random() * 500}px`;
});       

//6.Detecta y muestra en la consola la tecla presionada por el usuario

document.addEventListener("keydown",() => {
    console.log("Tecla presionada: " ,event.key); //se muestra en consola cuando mantenemos apretada y la  cuenta la cantidad
});


//7.implementa un botón que oculte o muestre un elemento al hacer click (toggle)

const toggleBtn = document.createElement("button");
const parrafo = document.createElement("p");
toggleBtn.textContent = "Mostrar/Ocultar";
parrafo.textContent = "Este es un párrafo";
document.body.appendChild(parrafo);
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click" , () => {
    parrafo.style.display = parrafo.style.display === "none" ? "block" : "none" ; 

});


//8.Crea un campo de seleccion ( dropdown) que actualice un párrafo con la opcion seleccionada

const select = document.createElement("select");
const opciones = ["Opocion 1","Opcion 2","Opcion 3"];
const parrafoSelect = document.createElement("p");
document.body.appendChild(select);
document.body.appendChild(parrafoSelect);

opciones.forEach((opcion) => {
    const opt = document.createElement("option");
    opt.textContent = opcion;
    select.appendChild(opt);
});

select.addEventListener("change", () => {
    parrafoSelect.textContent = `Seleccionaste: $(select.value)` ;
});

//9.Implementa un formulario con validacion para correos electronicos.

const emailForm = document.createElement("form");
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder  = "escribe tu correo";
const emailError = document.createElement("span");
const emailSubmit = document.createElement("button");
emailSubmit.textContent = "Enviar";

emailForm.appendChild(emailInput);
emailForm.appendChild(emailError);
emailForm.appendChild(emailSubmit);
document.body.appendChild(emailForm);

emailForm.addEventListener("submit", (event) => {
    event.provenDefafult();
    const email = emailInput.value;
    if (!email.includes("@")) {
        emailError.textContent = "correo no valido"
    } else {
        emailError.textContent = "" ;
        alert("correo enviado correctamente.");

    }
    })

//10 Haz un evento que cambie el texto de un boton al hacer click en el.

const botonCambioTexto = document.createElement("button");
botonCambioTexto.textContent= "Haz clic para cambiar";
document.body.appendChild(botonCambioTexto);

botonCambioTexto.addEventListener("click", () => {
    botonCambioTexto.textContent = "Texto cambiado";
    
});







