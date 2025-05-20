
document.addEventListener('DOMContentLoaded', () => {

  // === Método que oculta o header ao fazer scroll para baixo ===
  let lastScroll = 0; // Guarda a última posição do scroll
  const header = document.querySelector('header'); // Seleciona o elemento <header>

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY; // Obtém a posição atual do scroll vertical

    if (currentScroll > lastScroll) {
      // Se o usuário estiver a fazer scroll para baixo, oculta o header
      header.classList.add('header-hidden');
    } else {
      // Se estiver a fazer scroll para cima, mostra o header
      header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll; // Atualiza a posição do scroll
  });

  

  // === Método que controla o popup do perfil ===
  const profileIcon = document.getElementById('profile-icon'); // Ícone de perfil
  const profilePopup = document.getElementById('profile-popup'); // Popup associado ao perfil

  // Mostra ou esconde o popup quando o ícone for clicado
  profileIcon.addEventListener('click', () => {
    profilePopup.classList.toggle('hidden'); // Alterna a visibilidade com a classe 'hidden'
  });

  // Fecha o popup ao clicar fora dele
  window.addEventListener('click', (e) => {
    // Se o clique não for dentro do popup nem no ícone
    if (!profilePopup.contains(e.target) && !profileIcon.contains(e.target)) {
      profilePopup.classList.add('hidden'); // Garante que o popup será escondido
    }
  });
});
