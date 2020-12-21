export const homework6 = () => {
    
/* Lesson JS-6. Масиви
1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */    
    document.getElementById('task51').onclick = function func() {
      class Product {
        constructor(params = {}) {
          Object.assign(this, {
            pName: null, 
            amount: 1, 
            bought: false
          }, { ...params }); 
        }
      
        static sortDefault(a, b) {  
          return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName); 
        }; 
      }
      Product.prototype.toString = function () {
        return ` ${this.bought ? 'no need to buy' : 'You should buy '} ${this.amount} ${this.pName} `;
        
      }; 
      
      
      const shopList = [
        { pName: 'meat', amount: 2, bought: false },
        { pName: 'potatoes', amount: 5, bought: true },
        { pName: 'butter', bought: true },
        { pName: 'bread', amount: 3, bought: false },
        { pName: 'toilet paper', amount: 7, bought: false }
      ].map(prodDef => new Product(prodDef));
    
      
      const addToShopList = prodDef => { 
        const prod = shopList.find(prod => prod.pName === prodDef.pName); 
        if (!prod) return shopList.push(new Product(prodDef)); 
        prod.amount += prodDef.amount; 
      }; 
      const printShopList = () => shopList.forEach(
        (prod, i) => console.log(`${i + 1}. ${prod}`)
      ); 
      
      alert(shopList.sort(Product.sortDefault));
      printShopList();
       
      
      const userAddProd = String(prompt(`What do you want to add to the shopping list?`));
      const userQuantity = Number(prompt(`How many ${userAddProd} do you want to add?`))
      addToShopList({ pName: userAddProd, amount: userQuantity });
      alert(shopList.sort(Product.sortDefault));
      printShopList();


      const deleteFromList = prompt(`Did you buy something already?`, "meat");
      let isProductName = false;
      for (let i = 0; i < shopList.length; i++) {
          if (shopList[i].pName == deleteFromList) {
              isProductName = true;
              if (shopList[i].bought == false) {
                  shopList[i].bought = true;
              } else {
                  alert(`You have bought this product already.`);
              }
          }
      }
      if (isProductName == false) {
          alert(`There is no this product in the list`);
      }
      alert(shopList.sort(Product.sortDefault));
};


/* 2. Создать массив, описывающий чек в магазине. 
Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */
document.getElementById('task52').onclick = function func() {

}
}

 
 

  
  
