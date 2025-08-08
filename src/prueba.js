// src/cart.js
function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function formatCartItems(cart) {
  return cart.map(item => `${item.name} - $${item.price.toFixed(2)}`);
}

module.exports = { calculateTotal, formatCartItems };