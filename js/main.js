/*
Arquivo principal do site
Responsável por carregar os produtos
*/

function renderProducts() {
  const container = document.getElementById("productsContainer");

  products.forEach((product) => {
    container.innerHTML += `
<div class="bg-white p-4 rounded-xl shadow text-center">

<img src="${product.image}" class="rounded-lg mb-4">

<h3 class="font-semibold text-lg">
${product.name}
</h3>

<p class="text-purple-600 font-bold mt-2">
R$ ${product.price}
</p>

<button
onclick="addToCart(${product.id})"
class="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg">

Adicionar ao carrinho

</button>

</div>
`;
  });
}

/* inicia o site */

renderProducts();
