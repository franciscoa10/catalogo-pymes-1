const sum = require('../src/prueba');

test('suma 2 + 3 debe ser 5', () => {
  expect(sum(2, 3)).toBe(5);
});