export function pesquisarCursos() {
  const input = document.querySelector('.js-pesquisar-cursos');

  input.addEventListener('input', () => {
    const termo = input.value.toLowerCase();
    const cursos = document.querySelectorAll('.curso-info-section');

    cursos.forEach((curso) => {
      const titulo = curso.querySelector('.js-nome-curso').textContent.toLowerCase();
      const descricao = curso.querySelector('.js-descricao-curso').textContent.toLowerCase();
      
      if(titulo.includes(termo) || descricao.includes(termo)){
        curso.style.display = "flex";
      }else {
        curso.style.display = "none";
      }
    })
  })
};

pesquisarCursos();