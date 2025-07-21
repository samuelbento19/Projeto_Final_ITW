import { perguntasCacaAoErro } from "../data/perguntasCacaErro.js";

function renderPergunta () {
  let html = '';

  perguntasCacaAoErro.forEach((pergunta, index) => {
    html += `
      <section class="js-pergunta-section" data-index="${index}">
        <p class="pergunta">${pergunta.pergunta}</p>
        <button class="option">${pergunta.opcoes[0]}</button>
        <button class="option">${pergunta.opcoes[1]}</button>
        <button class="option">${pergunta.opcoes[2]}</button>
        <button class="option">${pergunta.opcoes[3]}</button>
        <p class="result"></p>
      </section>`;
  });

  document.querySelector('.js-perguntas-cacaErro-container').innerHTML = html;
}

// Primeiro renderiza as perguntas
renderPergunta();

// Depois adiciona os event listeners
const sectionElements = document.querySelectorAll('.js-pergunta-section');

sectionElements.forEach((section) => {
  const index = Number(section.getAttribute('data-index'));
  const respostaCorreta = perguntasCacaAoErro[index].respostaCorreta;

  const botoes = section.querySelectorAll('.option'); // CORRETO: dentro da section

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // Limpar estilos anteriores de todos os botões da section
      botoes.forEach(b => {
        b.style.backgroundColor = '';
        b.style.color = '';
        b.disabled = false;
      });

      // Marcar o botão clicado
      if (botao.textContent === respostaCorreta) {
        botao.style.backgroundColor = 'green';
        botao.style.color = 'white';
      } else {
        botao.style.backgroundColor = 'red';
        botao.style.color = 'white';
      }
      
    });
  });
});
