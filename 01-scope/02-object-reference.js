const originalProduct = {
    title: 'Яблоки',
    price: 150
};
const cartProduct = originalProduct;
cartProduct.price = 100;

console.log('Цена в корзине:', cartProduct.price); 
console.log('Цена в базе данных:', originalProduct.price);


// ТЕМА: Копирование объектов по ссылке vs spread-оператор
// ПОДКАПОТНИК: Объекты в JS копируются по ссылке. Чтобы сделать честную копию, юзаем {...obj}