export const homework6 = () => {
    
/* Lesson JS-6. Масиви
1. 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */    
    document.getElementById('task51').onclick = function func() {
let list = [ 
    { name: 'potatoes', quantity: 4, isBought: 1 },
    { name: 'butter', quantity: 1, isBought: 1  },
    { name: 'milk', quantity: 1, isBought: 0  },
    { name: 'meat', quantity: 3, isBought: 1  },
    { name: 'toilet paper', quantity: 5, isBought: 0 }
  ];

  function alertList(x) {
    let nonBought = x.filter(item => item.isBought === 0);
    let bought = x.find(item => item.isBought === 1);
    alert(`You should buy this: ${nonBought}; this is bought already: ${bought}`);
  }

  alertList(list);
}}