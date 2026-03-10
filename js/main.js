/* Renderiza os produtos automaticamente */

const container = document.getElementById("product-list");

function renderProducts() {
  products.forEach((product) => {
    const stars = "⭐".repeat(product.rating);

    container.innerHTML += `

<div class="bg-white p-4 rounded-xl shadow hover:shadow-xl transition hover:scale-105">

<img src="${product.image}" class="rounded-lg mb-4">

<h3 class="text-lg font-semibold">
${product.name}
</h3>

<p class="text-gray-600 text-sm">
${product.description}
</p>

<div class="text-yellow-400 mt-2">
${stars}
</div>

<p class="text-purple-600 font-bold mt-2">
R$${product.price}
</p>

<div class="flex gap-2 mt-3">

<button
onclick="addToCart('${product.name}')"
class="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700">

Adicionar

</button>

<button
onclick="openModal(${product.id})"
class="border px-3 py-2 rounded-lg">

Ver

</button>

</div>

</div>
`;
  });
}

renderProducts();
function openModal(id) {
  const product = products.find((p) => p.id === id);

  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-title").innerText = product.name;
  document.getElementById("modal-description").innerText = product.description;
  document.getElementById("modal-price").innerText = "R$" + product.price;

  document.getElementById("product-modal").classList.remove("hidden");
  document.getElementById("product-modal").classList.add("flex");
}

function closeModal() {
  document.getElementById("product-modal").classList.add("hidden");
}
