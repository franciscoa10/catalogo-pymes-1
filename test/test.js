const { calculateTotal, formatCartItems } = require('../src/prueba');
describe('Carrito de compras', () => {
  const cart = [
    { name: "Camiseta Roja", price: 18.99 },
    { name: "Zapatos Negros", price: 49.99 }
  ];

  test('calcula el total correctamente', () => {
    expect(calculateTotal(cart)).toBeCloseTo(68.98);
  });

  test('formatea los ítems del carrito', () => {
    expect(formatCartItems(cart)).toEqual([
      "Camiseta Roja - $18.99",
      "Zapatos Negros - $49.99"
    ]);
  });
});