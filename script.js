// script.js
function mostrarSurpresa() {
  const surp = document.getElementById('surpresa');
  if (!surp) return;

  // Se estiver com display:none (.hidden), torne visível primeiro
  if (getComputedStyle(surp).display === 'none') {
    surp.style.display = 'block';
    // força reflow para que a transição funcione
    void surp.offsetWidth;
  }

  // adiciona a classe que ativa a transição definida em CSS
  surp.classList.add('mostrar');
  // se quiser, remova a classe .hidden do atributo class (opcional)
  surp.classList.remove('hidden');

  // contador simples
  document.getElementById('contador').textContent = 'Surpresa mostrada!';

  // rolar até a surpresa
  surp.scrollIntoView({ behavior: 'smooth' });
}
