function renderFooter () {
  html = `<div class="footer-content">
        <div class="footer-section">
          <h3>SkillForge</h3>
          <p>Aprende ao teu ritmo, com apoio especializado e cursos certificados.</p>
        </div>
        <div class="footer-section">
          <h4>Cursos</h4>
          <ul>
            <li><a href="../html/curso-java.html">Programação em Java</a></li>
            <li><a href="../html/curso-dg.html">Design Gráfico</a></li>
            <li><a href="../html/curso-bd.html">Base de Dados</a></li>
            <li><a href="../html/cursos.html">Ver mais...</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Redes Sociais</h4>
          <div class = "footer-img-section"> 
            <a href="https://www.facebook.com/seuusuario" target="_blank"><i class="fab fa-facebook-f"></i></a><br>
            <a href="https://www.instagram.com/seuusuario" target="_blank"><i class="fab fa-instagram"></i></a><br>
            <a href="https://www.linkedin.com/in/seuusuario" target="_blank"><i class="fab fa-linkedin-in"></i></a><br>
            <a href="https://www.youtube.com/RicFazeres" target="_blank"><i class="fab fa-youtube"></i></a><br>
          </div>
        </div>
        <div class="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@skillforge.pt</p>
          <p>Telefone: +351 912 345 678</p>
        </div>
        <div class="footer-section">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="../html/definicoes.html">Definições</a></li>
            <li><a href="../html/termos-condicoes.html">Termos e Condições</a></li>
            <li><a href="../html/politica-privacidade.html">Política de Privacidade</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc4yf0yNzzkTWSLmpk4seLeuc8CDktNpkTVSdmG-rikPGZZvg/viewform?usp=dialog" target="_blank">Questionário</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2025 SkillForge. Todos os direitos reservados.
      </div>`

      document.querySelector('.site-footer').innerHTML = html;
}

renderFooter();