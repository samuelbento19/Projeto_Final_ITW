function renderHeaderLogin() {
  html = ` 
    <div class="left-section"> 
      <a href="index-login.html"><img src="../icons/Skill Forge logo ret.png" alt="Logo Skill Forge"></a>
    </div>
    
    <div class="middle-section">
      <input class="search-bar" type="text" placeholder="Pesquise...">
      <button class="search-button"><img src="../icons/search_33dp_000000_FILL0_wght400_GRAD0_opsz40.png" alt="Pesquisar"></button>
      <div class="search-result"></div>
    </div>

    <div class="right-section"> 
      <div class="profile-container">
        <img id="profile-icon" src="../icons/person_33dp_000000_FILL0_wght400_GRAD0_opsz40.png" alt="Perfil">
        <div id="profile-popup" class="popup hidden">
          <ul>
            <a href="../html/login.html" class="popup-link">Entrar/Registrar</a>
          </ul>
        </div>
      </div>
      <a href="../html/checkout.html">
        <button class="cart-icon">
          <img src="../icons/shopping_cart_33dp_000000_FILL0_wght400_GRAD0_opsz40.png" alt="Carrinho">
          <div class = "cart-counter js-cart-qty">0</div>
        </button>
      </a>
      <button class="menu-icon">
        <img src="../icons/menu_33dp_000000_FILL0_wght400_GRAD0_opsz40.png" alt="Menu">
      </button>
    </div>`;

  document.querySelector('.header-login').innerHTML = html;
}

renderHeaderLogin();


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
