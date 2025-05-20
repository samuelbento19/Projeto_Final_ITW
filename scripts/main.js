// Executa o código após o DOM estar pronto
document.addEventListener('DOMContentLoaded', function () {

  // === Inicializa o swiper (slider de imagens) ===
  // Utiliza o framework "Swiper"
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,      // Mostra uma imagem por vez
    loop: true,            // Permite rotação infinita
    spaceBetween: 32,      // Espaço entre slides em pixels
    navigation: {
      nextEl: '.swiper-button-next',  // Botão próximo
      prevEl: '.swiper-button-prev',  // Botão anterior
    },
    simulateTouch: true,   // Permite swipe com o dedo/mouse
    grabCursor: true,      // Mostra cursor de “agarre” ao passar sobre o slider
  });



  // === Lógica do formulário/modal de signup ===
  const modal = document.getElementById("signup-modal");          // Modal principal
  const openBtn = document.getElementById("signup-button");       // Botão para abrir o modal
  const coverBtn = document.getElementById("signup-button-cover");// Botão da capa (opcional)
  const closeBtn = modal.querySelector(".close-btn");             // Botão de fechar

  // Abre o modal ao clicar no botão principal
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Abre o modal ao clicar no botão da capa (se existir)
  if (coverBtn) {
    coverBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }

  // Fecha o modal ao clicar no botão de fechar
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Fecha o modal ao clicar fora da caixa de conteúdo
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  

  // === Lógica da secção FAQ (perguntas frequentes) ===
  const faqItems = document.querySelectorAll('.faq-item'); // Seleciona todos os blocos de FAQ

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question'); // Seleciona o botão (pergunta)

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open'); // Verifica se já está aberto

      // Fecha todos os itens de FAQ
      faqItems.forEach(i => i.classList.remove('open'));

      // Abre o item clicado, se ainda não estiver aberto
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});
