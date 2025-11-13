// Reemplaza "TU_API_KEY_AQUI" por tu API key de https://openweathermap.org
const apiKey = "7cceef722c0f1abd34275ad0cc52488d"; // 🔑 Regístrate en openweathermap.org

const btn = document.getElementById("buscar");
const input = document.getElementById("ciudad");
const resultadoEl = document.getElementById("resultado");

if (!btn || !input || !resultadoEl) {
  console.error('Elementos requeridos no encontrados en el DOM: buscar, ciudad, resultado');
} else {
  btn.addEventListener("click", async () => {
    const ciudad = input.value.trim();

    if (!ciudad) {
      return alert("Ingrese una ciudad");
    }

    resultadoEl.innerHTML = 'Buscando...';

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        ciudad
      )}&units=metric&lang=es&appid=${apiKey}`;

      const res = await fetch(url);

      // Si la respuesta HTTP no es 2xx, leer el body y mostrar mensaje
      if (!res.ok) {
        let errMsg = `${res.status} ${res.statusText}`;
        try {
          const errJson = await res.json();
          if (errJson && errJson.message) errMsg = `${errJson.message} (${res.status})`;
        } catch (e) {
          // no-op
        }
        resultadoEl.innerHTML = `⚠️ Error del servidor: ${errMsg}`;
        console.warn('Fetch error:', res.status, res.statusText);
        return;
      }

      const data = await res.json();

      // Verificación robusta del código devuelto por la API
      const cod = Number(data.cod);
      if (cod !== 200) {
        const msg = data.message || 'Ciudad no encontrada';
        resultadoEl.innerHTML = `❌ ${msg}`;
        console.log('API returned non-200 code:', data);
        return;
      }

      // Obtener el ícono del clima
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      resultadoEl.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}" alt="${data.weather[0].description}">
        <p>🌡️ Temp: ${data.main.temp}ºC</p>
        <p>💨 Viento: ${data.wind.speed} km/h</p>
        <p>☁️ Clima: ${data.weather[0].description}</p>
      `;
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      resultadoEl.innerHTML = '⚠️ Error al conectar con la API';
    }
  });
}