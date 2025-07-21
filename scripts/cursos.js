import { curso } from "../data/curso.js";

import { formatCurrency } from "./utils/money.js";

import { cart, updateCartQuantity, addToCart, removeFromCart } from "../data/cart.js";

 function renderCursos() {
    let html = ``;

    curso.forEach((cursoItem) => {
      html += `
  <section class="curso-info-section">
    <img src="../images/${cursoItem.id}.jpg">
    <div class="curso-info">
      <h2>${cursoItem.nome}</h2>
      <p>${cursoItem.descricao}</p>
      <div class="curso-info-resume">
        <div class="indicador">
          <img src="../icons/schedule_33dp_000000_FILL0_wght400_GRAD0_opsz40.png">
          <span>${cursoItem.horas}h</span>
        </div>
        <div class="indicador">
          <img src="../icons/check_circle_33dp_000000_FILL0_wght400_GRAD0_opsz40.png">
          <span>Certificado</span>
        </div>
        <div class="indicador">
          <img src="../icons/bolt_33dp_000000_FILL0_wght400_GRAD0_opsz40.png">
          <span>${cursoItem.nivel}</span>
        </div>
      </div>

      <div class="curso-preco">
        <span><strong>Preço:</strong> ${formatCurrency(cursoItem.preco)} €</span>
      </div>

      <div class="see-more-container">
        <button class="add-button see-more" data-curso-id="${cursoItem.id}">Adicionar</button>
        <button class="see-more"><a href="../html/curso-dw.html">Ver mais...</a></button>
      </div>
    </div>
  </section>
`;
    })

    document.querySelector('.js-cursos').innerHTML = html;
}

renderCursos();

document.querySelectorAll('.add-button')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const idCurso = btn.dataset.cursoId;   // lê o data‑atribute
      addToCart(idCurso);                    // passa o id
    });
  });

console.log(cart);

updateCartQuantity();




