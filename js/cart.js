/*
Sistema de carrinho de compras
*/

let cart = [];

/* adiciona produto ao carrinho */

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  cart.push(product);

  renderCart();
}

/* renderiza carrinho */

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  const totalElement = document.getElementById("cartTotal");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    cartItems.innerHTML += `
<div class="flex justify-between mb-2">
<span>${item.name}</span>
<span>R$ ${item.price}</span>
</div>
`;
  });

  totalElement.textContent = total.toFixed(2);
}

/* abrir e fechar carrinho */

function toggleCart() {
  const cart = document.getElementById("cartSidebar");

  cart.classList.toggle("translate-x-full");
}
