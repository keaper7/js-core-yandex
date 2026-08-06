function addItem(cart, newItem) {
  return [...cart, newItem];
}

const cart = [
  { name: 'Ноутбук', price: 800 },
  { name: 'Мышь', price: 20 }
];

console.log(cart);
console.log(addItem(cart, { name: 'Клавиатура', price: 50 }));