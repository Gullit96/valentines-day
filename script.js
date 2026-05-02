function mostrarSurpresa() {
  document.getElementById("surpresa").classList.remove("hidden");
}

function calcularTempo() {
  const inicio = new Date("2024-07-07");
  const hoje = new Date();

  let anos = hoje.getFullYear() - inicio.getFullYear();
  let meses = hoje.getMonth() - inicio.getMonth();
  let dias = hoje.getDate() - inicio.getDate();

  if (dias < 0) {
    meses--;
    dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  document.getElementById("contador").innerText =
    `Estamos juntos há ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s) ❤️`;
}

calcularTempo();
