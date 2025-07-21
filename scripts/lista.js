document.addEventListener('DOMContentLoaded', () => {
  const toDoList = [];

function renderToDoList() {
  const renderSection = document.querySelector('.render-to-do-input-section');
  renderSection.innerHTML = '';

  toDoList.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const span = document.createElement('span');
    span.innerHTML = `<strong>${todo.name}</strong> - ${todo.date} ${todo.time}`;

    const button = document.createElement('button');
    button.textContent = 'Remover';
    button.addEventListener('click', () => {
      toDoList.splice(index, 1);
      renderToDoList();
    });

    todoItem.appendChild(span);
    todoItem.appendChild(button);
    renderSection.appendChild(todoItem);
  });
}


  function addToDo() {
    const nameInput = document.querySelector('.js-input-name');
    const dateInput = document.querySelector('.js-input-date');
    const timeInput = document.querySelector('.js-input-time');

    const name = nameInput.value;
    const date = dateInput.value;
    const time = timeInput.value;

    toDoList.push({ name, date, time });
    nameInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
    renderToDoList();
  }

   function removeToDo(index) {
    toDoList.splice(index, 1);
    renderToDoList();
  }

  const addButton = document.querySelector('.add-button-list');
  addButton.addEventListener('click', () => addToDo());
});


