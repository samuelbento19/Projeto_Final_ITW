import { dataHojeExtenso } from "./utils/date.js";

function renderInfoData() {
  let html = '<span> Hoje é: </span>'+dataHojeExtenso();
  document.querySelector('.dia-semana').innerHTML = html;
}

renderInfoData();