function mostrarSurpresa() {
  document.getElementById("surpresa").classList.remove("hidden");
}

// contador de tempo juntos
const inicio = new Date("2023-01-01");
const hoje = new Date();

const diff = hoje - inicio;
const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("contador").innerText =
  "Estamos juntos há " + dias + " dias ❤️";
