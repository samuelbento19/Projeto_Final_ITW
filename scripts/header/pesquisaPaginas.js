import { paginas } from "../../data/paginas.js";

const input = document.querySelector('.search-bar');

input.addEventListener('input', () => {
  const inputValue = input.value;

  if (inputValue.length > 0) {
    filterResult(inputValue);
  } else {
    document.querySelector('.search-result').innerHTML = '';
  }
});

function renderHTML(lista) {
  let html = '';
  lista.forEach((pagina) => {
    html += `
      <div class="pagina-container">
        <a href="./${pagina.ref}.html"><p class="name">${pagina.nome}</p></a>
      </div>
    `;
  });

  document.querySelector('.search-result').innerHTML = html;
}

function filterResult(word) {
  const result = paginas.filter(pagina =>
    pagina.nome.toLowerCase().includes(word.toLowerCase())
  );

  renderHTML(result);
}
