import { perguntasProgramacao } from "../data/perguntasQuiz.js";

function renderQuestion () {
  let html = '';

  perguntasProgramacao.forEach((pergunta, index) => {  // aqui faltava o 'index'!
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

  document.querySelector('.js-perguntas-container').innerHTML = html;
}

renderQuestion();  // 1. Primeiro renderiza o conteúdo

// 2. Depois adiciona os event listeners aos botões
document.querySelectorAll('.js-pergunta-section').forEach(section => {
  const index = Number(section.getAttribute('data-index'));
  const respostaCorreta = perguntasProgramacao[index].resposta;

  const botoes = section.querySelectorAll('.option');
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // Limpar estilos anteriores
      botoes.forEach(b => {
        b.style.backgroundColor = '';
        b.style.color = '';
        b.disabled = false;
      });

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
