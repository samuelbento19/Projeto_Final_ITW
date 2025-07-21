export let cart = JSON.parse(localStorage.getItem('cart')) || [];



export function getCart() {
  return cart;
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart)); // Converte o array de objetos para JSON e guarda
}



export function updateCartQuantity() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  const counterElement = document.querySelector('.js-cart-qty');
  if (counterElement) {
    counterElement.textContent = total;
  }

  return total;
}

export function addToCart(idCurso) {
  // Procura um item já existente
  let matchingItem = cart.find(item => item.id === idCurso);

  if (matchingItem) {
    matchingItem.quantity += 1;   
  } else {
    cart.push({ id: idCurso, quantity: 1 }); 
  }

  saveToStorage();
  updateCartQuantity();    
  renderCartPopup();             
}

export function removeFromCart(idCurso) {
  cart = cart.filter(item => item.id !== idCurso);
  saveToStorage();
  updateCartQuantity();
}