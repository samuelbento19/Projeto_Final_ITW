// login-system.js

// Lê os utilizadores do localStorage ou inicia com array vazio
let users = JSON.parse(localStorage.getItem("users")) || [];

// Atualiza localStorage sempre que um novo user é registado
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Função para registo
function registerUser() {
  const username = document.querySelector('.js-username-input').value.trim();
  const password = document.querySelector('.js-password-input').value;

  if (!username || !password) {
    alert("Preenche todos os campos.");
    return;
  }

  const exists = users.some(user => user.username === username);

  if (exists) {
    alert("Este username já está registado.");
    return;
  }

  users.push({ username, password });
  saveUsers();
  alert("Registo concluído com sucesso!");
}

// Função para login
function loginUser() {
  const username = document.querySelector('.js-username-input').value.trim();
  const password = document.querySelector('.js-password-input').value;

  const userFound = users.find(user => user.username === username && user.password === password);

  if (userFound) {
    localStorage.setItem("loggedInUser", username); // guardar sessão
    alert("Login bem-sucedido! Bem-vindo, " + username);
    window.location.href = "perfil.html";
  } else {
    alert("Credenciais inválidas.");
  }
}

// Event listeners
document.querySelector('.js-register-button').addEventListener('click', registerUser);
document.querySelector('.js-login-button').addEventListener('click', loginUser);
