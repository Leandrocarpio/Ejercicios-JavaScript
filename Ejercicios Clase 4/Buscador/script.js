document.getElementById("buscar").addEventListener("click", () => {
	const user = document.getElementById("usuario").value.trim();
	if (!user) return alert("Ingrese un usuario");

	document.getElementById("resultado").innerHTML = "🔎 Buscando...";

	fetch(`https://api.github.com/users/${user}`)
		.then((res) => {
			if (!res.ok) throw new Error("Usuario no encontrado");
			return res.json();
		})
		.then((data) => {
			document.getElementById("resultado").innerHTML = `
				<img src="${data.avatar_url}" alt="Avatar">
				<h2>${data.login}</h2>
				<p>👥 Seguidores: ${data.followers}</p>
				<p>📁 Repos públicos: ${data.public_repos}</p>
                <p>📍 Ubicación: ${data.location || "No disponible"}</p>
                <p>⭐ Estrella: ${data.starred_url ? data.starred_url.split('{')[0] : "No disponible"}</p>
				<a href="${data.html_url}" target="_blank">Ver perfil</a>
				<div id="repos"><p>Cargando repositorios...</p></div>
			`;
			
			return fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=5`);
		})
		.then((res) => res.json())
		.then((repos) => {
			let reposHTML = "<h3>📦 Últimos Repositorios:</h3>";
			repos.forEach((repo) => {
				reposHTML += `
					<div class="repo">
						<strong>${repo.name}</strong>
						<p>${repo.description || "Sin descripción"}</p>
						<a href="${repo.html_url}" target="_blank">Ver repositorio</a>
					</div>
				`;
			});
			document.getElementById("repos").innerHTML = reposHTML;
		})
		.catch((error) => {
			document.getElementById("resultado").innerHTML = "❌ " + error.message;
		})
		.finally(() => console.log("🔍 Búsqueda finalizada"));
});
