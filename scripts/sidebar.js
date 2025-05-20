
document.addEventListener("DOMContentLoaded", () => {

  // === Abertura e fecho da sidebar ===
  const menuBtn = document.querySelector(".menu-icon"); // Botão para abrir a sidebar
  const sidebar = document.getElementById("sidebar");    // Elemento da sidebar
  const closeBtn = document.getElementById("close-sidebar"); // Botão de fechar

  // Abre a sidebar ao clicar no menu
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("visible");
  });

  // Fecha a sidebar ao clicar no botão de fechar
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("visible");
  });

  

  // === Submenu (dropdown) da sidebar ===
  const submenuToggle = document.querySelector(".submenu-toggle"); // Botão de abrir submenu
  const submenu = document.querySelector(".submenu");              // Lista de submenu

  submenuToggle.addEventListener("click", () => {
    // Alterna entre visível e escondido
    submenu.classList.toggle("hidden");

    // Atualiza o texto do botão dependendo do estado
    submenuToggle.textContent = submenu.classList.contains("hidden")
      ? "Cursos ▾"  // Se estiver escondido
      : "Cursos ▴"; // Se estiver visível
  });
});
