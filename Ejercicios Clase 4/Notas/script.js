const listaNotas = document.getElementById("listaNotas");
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function mostrarNotas() {
	listaNotas.innerHTML = "";
	notas.forEach((nota, i) => {
		const li = document.createElement("li");
		li.textContent = nota.texto + " - " + nota.fecha;
		
		const btnEliminar = document.createElement("button");
		btnEliminar.textContent = "Eliminar";
		btnEliminar.className = "btn-eliminar";
		btnEliminar.addEventListener("click", () => {
			notas.splice(i, 1);
			localStorage.setItem("notas", JSON.stringify(notas));
			mostrarNotas();
		});
		
		li.appendChild(btnEliminar);
		listaNotas.appendChild(li);
	});
}

document.getElementById("guardar").addEventListener("click", () => {
	const nota = document.getElementById("nota").value.trim();
	if (nota) {
		notas.push({
			texto: nota,
			fecha: new Date().toLocaleString()
		});
		localStorage.setItem("notas", JSON.stringify(notas));
		mostrarNotas();
		document.getElementById("nota").value = "";
	}
});

document.getElementById("borrar").addEventListener("click", () => {
	localStorage.removeItem("notas");
	notas = [];
	mostrarNotas();
});

mostrarNotas();