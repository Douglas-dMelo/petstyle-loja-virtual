let cart = [];

function addToCart(productName) {
  cart.push(productName);

  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");
  const totalElement = document.getElementById("cart-total");

  list.innerHTML = "";

  let total = 0;

  /* percorre todos os itens do carrinho */

  cart.forEach((item) => {
    total += item.price;

    list.innerHTML += `

<li class="flex justify-between border-b pb-2">

<span>${item.name}</span>

<span class="text-purple-600">
R$${item.price}
</span>

</li>

`;
  });

  /* atualiza contador */

  count.innerText = cart.length;

  /* atualiza total */

  totalElement.innerText = "R$" + total.toFixed(2);
}
function toggleCart() {
  const cartElement = document.getElementById("cart");

  cartElement.classList.toggle("translate-x-full");
}
function addToCart(productName) {
  const product = products.find((p) => p.name === productName);

  cart.push(product);

  updateCart();
}
