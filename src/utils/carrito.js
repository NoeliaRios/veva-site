// Inicializa el carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Función para agregar un producto al carrito
function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Incrementar cantidad
  } else {
    cart.push({ ...product, quantity: 1 }); // Agregar producto nuevo
  }
  localStorage.setItem("cart", JSON.stringify(cart)); // Guardar en localStorage
  updateCartUI();
}

// Función para mostrar los productos en el carrito
function updateCartUI() {
  const cartContainer = document.getElementById("cart-container");
  if (!cartContainer) return;

  cartContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <span>${item.name} x${item.quantity}</span>
        <button onclick="removeFromCart(${item.id})">Eliminar</button>
      </div>
    `,
    )
    .join("");
}

// Función para eliminar un producto
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

// Cargar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", updateCartUI);
