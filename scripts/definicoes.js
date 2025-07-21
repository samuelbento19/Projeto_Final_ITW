document.addEventListener('DOMContentLoaded', () => {
  const idiomaSelect = document.getElementById('idioma-select');
const temaSelect = document.getElementById('tema-select');

  // Carregar preferências do localStorage ou valores por defeito
  const idiomaGuardado = localStorage.getItem('skillforge_idioma') || 'pt';
  const temaGuardado = localStorage.getItem('skillforge_tema') || 'system';

  idiomaSelect.value = idiomaGuardado;
  temaSelect.value = temaGuardado;

  // Aplica o tema no carregamento
  aplicarTema(temaGuardado);

  // Quando o utilizador muda o idioma
  idiomaSelect.addEventListener('change', (e) => {
    localStorage.setItem('skillforge_idioma', e.target.value);
    alert(`Idioma definido para: ${e.target.options[e.target.selectedIndex].text}`);
    // Aqui podes colocar lógica para recarregar a página ou mudar textos se tiveres i18n implementado
  });

  // Quando o utilizador muda o tema
  temaSelect.addEventListener('change', (e) => {
    localStorage.setItem('skillforge_tema', e.target.value);
    aplicarTema(e.target.value);
  });

  function aplicarTema(tema) {
    if (tema === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (tema === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      // system
      document.documentElement.removeAttribute('data-theme');
    }
  }
});