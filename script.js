function mostrarSurpresa() {
  document.getElementById("surpresa").classList.remove("hidden");
}

function atualizarContador() {
  const inicio = new Date("2024-07-07T00:00:00");
  const agora = new Date();

  let diff = agora - inicio;

  let segundos = Math.floor(diff / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  let anos = Math.floor(dias / 365);
  dias = dias % 365;

  let meses = Math.floor(dias / 30);
  dias = dias % 30;

  horas = horas % 24;
  minutos = minutos % 60;
  segundos = segundos % 60;

  document.getElementById("contador").innerText =
    `Estamos juntos há ${anos} anos, ${meses} meses, ${dias} dias, ` +
    `${horas}h ${minutos}min ${segundos}s !`;
}

// atualiza a cada 1 segundo
setInterval(atualizarContador, 1000);

// roda na hora que abrir o site
atualizarContador();
