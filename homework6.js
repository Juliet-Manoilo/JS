export const homework6 = () => {
    
/* Lesson JS-6. Масиви
1. 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */    
    document.getElementById('task51').onclick = function func() {
const list = [ 
    { name: 'potatoes', quantity: 4, isBought: 1 },
    { name: 'butter', quantity: 1, isBought: 1  },
    { name: 'milk', quantity: 1, isBought: 0  },
    { name: 'meat', quantity: 3, isBought: 1  },
    { name: 'toilet paper', quantity: 5, isBought: 0 }
  ];

  list.sort(function alertList(a, b) {
    return  a.isBought - b.isBought;
    
  });

  alert(`You should buy this: ${list[0].quantity} ${list[0].name}, ${list[1].quantity} ${list[1].name}; this is bought already: ${list[2].name}, ${list[3].name}, ${list[4].name}`);


}}

/* const shopList = [
  { pName: 'Банан', amount: 2 },
  { pName: 'Апельсин', amount: 5, bought: true },
  { pName: 'Молоко', bought: true },
  { pName: 'Груша', amount: 10 }
].map(prodDef => new Product(prodDef));

const addToShopList = prodDef => {  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  const prod = shopList.find(prod => prod.pName === prodDef.pName); 
  if (!prod) return shopList.push(new Product(prodDef)); 
  prod.amount += prodDef.amount; 
}; 
const printShopList = () => shopList.forEach(
  (prod, i) => console.log(`${i + 1}. ${prod}`)
); 

shopList.sort(Product.sortDefault);
printShopList();
console.log('---'); 

addToShopList({ pName: 'Банан', amount: 3 });
addToShopList({ pName: 'Шоколад', amount: 2 });
shopList.sort(Product.sortDefault);
printShopList(); */