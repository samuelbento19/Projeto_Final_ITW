import { dataHojeExtenso } from "./utils/date.js";

function renderInfoData() {
  let html = '<span> Hoje é: </span>' + dataHojeExtenso();
  document.querySelector('.dia-semana').innerHTML = html;
}

function renderNomeUtilizador() {
  const nome = localStorage.getItem("loggedInUser");

  if (nome) {
    document.querySelector('.perfil-nome').textContent = nome;
  } else {
    document.querySelector('.perfil-nome').textContent = "Utilizador Desconhecido";
  }
}

renderInfoData();
renderNomeUtilizador();
