
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

  function renderSidebar(){
    html = `<button id="close-sidebar" class="close-btn">&#10007;</button>
    <ul class="sidebar-links">
      <li class="has-submenu">
        <button class="submenu-toggle">Cursos ▾</button>
        <ul class="submenu hidden">
          <li><a href="../html/curso-dw.html">Desenvolvimento Web</a></li>
          <li><a href="../html/curso-dg.html">Design Gráfico</a></li>
          <li><a href="../html/curso-ia.html">Inteligência Artificial</a></li>
          <li><a href="../html/curso-java.html">Programação em Java</a></li>
          <li><a href="../html/curso-phyton.html">Programação em Phyton</a></li>
          <li><a href="../html/curso-c.html">Programação em C++</a></li>
          <li><a href="../html/curso-redes.html">Redes e Sistemas Informáticos</a></li>
          <li><a href="../html/curso-bd.html">Base de Dados</a></li>
          <li><a href="../html/cursos.html">Ver mais...</a></li>
        </ul>
      </li>
      <li><a href="../html/professores.html">Professores</a></li>
      <li><a href="../html/horarios.html">Horários</a></li>
      <li><a href="../html/autores.html">Autores</a></li>
      <li><a href="../html/contactos.html">Contactos</a></li>
      <li><a href="../html/termos-condicoes.html">Termos e Condições</a></li>
      <li><a href="../html/politica-privacidade.html">Política de Privacidade</a></li>
    </ul>`

    document.querySelector('.sidebar').innerHTML = html;
  }



