let segundos = 0;
let intervalo;

function reproducirSonido() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 800;
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.3);

  // Animación visual
  document.getElementById("cronómetro").classList.add("alerta");
  setTimeout(() => {
    document.getElementById("cronómetro").classList.remove("alerta");
  }, 500);
}

function actualizarCronometro() {
  const hrs = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const secs = String(segundos % 60).padStart(2, "0");

  document.getElementById("cronómetro").textContent = `${hrs}:${mins}:${secs}`;

  // Reproducir sonido cada 10 segundos
  if (segundos > 0 && segundos % 10 === 0) {
    reproducirSonido();
  }
}

document.getElementById("iniciar").addEventListener("click", () => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      actualizarCronometro();
    }, 1000);
  }
});

document.getElementById("pausar").addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
});

document.getElementById("reiniciar").addEventListener("click", () => {
  clearInterval(intervalo);
  segundos = 0;
  actualizarCronometro();
  intervalo = null;
});