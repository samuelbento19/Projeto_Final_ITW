// Função para formatar preço (cêntimos para euros)
function formatPrice(cents) {
  return (cents / 100).toFixed(2).replace('.', ',');
}

const cursos = [
  { id: '1000-01', nome: 'Desenvolvimento Web', preco: 1699 },
  { id: '1000-02', nome: 'Design Gráfico', preco: 899 },
  { id: '1000-03', nome: 'Inteligência Artificial', preco: 1399 },
];

// Ler carrinho do localStorage
function getCartFromLocalStorage() {
  const cartJSON = localStorage.getItem('cart');
  if (!cartJSON) return [];
  try {
    return JSON.parse(cartJSON);
  } catch {
    return [];
  }
}

// Salvar carrinho no localStorage
function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Remover item específico do carrinho pelo id
function removeItemFromCart(id) {
  let cart = getCartFromLocalStorage();
  cart = cart.filter(item => item.id !== id);
  saveCartToLocalStorage(cart);
  renderCart();
}

// Limpar carrinho todo
function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

// Renderizar o carrinho na tabela
function renderCart() {
  const tbody = document.querySelector('#cart-table tbody');
  tbody.innerHTML = '';
  let total = 0;

  const cart = getCartFromLocalStorage();

  if (cart.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Carrinho vazio</td></tr>`;
    document.getElementById('cart-total').textContent = 'Total: 0,00 €';
    return;
  }

  cart.forEach(item => {
    const curso = cursos.find(c => c.id === item.id);
    if (!curso) return;
    const precoUnit = curso.preco;
    const totalItem = precoUnit * item.quantity;
    total += totalItem;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${curso.nome}</td>
      <td>${item.quantity}</td>
      <td>${formatPrice(precoUnit)} €</td>
      <td>${formatPrice(totalItem)} €</td>
      <td><button class="remove-item-btn" data-id="${curso.id}">Remover</button></td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('cart-total').textContent = `Total: ${formatPrice(total)} €`;

  // Adicionar event listeners para remover item
  document.querySelectorAll('.remove-item-btn').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      removeItemFromCart(id);
    });
  });
}

// Configurar evento do botão "Remover tudo"
document.getElementById('clear-cart-btn').addEventListener('click', () => {
  if (confirm('Quer mesmo limpar todo o carrinho?')) {
    clearCart();
  }
});

renderCart();
