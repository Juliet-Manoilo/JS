export const = homework2 = () => {
/* LESSON JS-2: Типи даних та оператори
Запросить у пользователя его возраст и определить, кем он является: 
ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...). */
document.getElementById('task11').onclick = function func() {
    const userAge2 = Number(prompt('How old are you?'))
    switch (true) {
      case userAge2 < 2:
      alert ('You are a baby');  
        break;
        case userAge2 > 2 && userAge2 < 12:
          alert ('You are a children');  
          break;
          case userAge2 > 12 && userAge2 < 18:
            alert ('You are a teenager');  
            break;
            case userAge2 > 18 && userAge2 < 60:
            alert ('You are adult');  
            break;
            case userAge2 >  60:
            alert ('You are old');  
            break;
      default:
        break;
    }};
    
 /* Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */
document.getElementById('task12').onclick = function func() {
    const userSymbol = Number(prompt('Put any number from 0 to 9'))
    switch (userSymbol) {
      case 0:
      alert ('Your symbol is )');  
        break;
        case 1:
      alert ('Your symbol is !');  
        break;
        case 2:
      alert ('Your symbol is @');  
        break;
        case 3:
      alert ('Your symbol is #');  
        break;
        case 4:
      alert ('Your symbol is $');  
        break;
        case 5:
      alert ('Your symbol is %');  
        break;
        case 6:
      alert ('Your symbol is ^');  
        break;
        case 7:
      alert ('Your symbol is &');  
        break;
        case 8:
      alert ('Your symbol is *');  
        break;
        case 9:
      alert ('Your symbol is (');  
        break;
      default:
        break;
    }};
    
    
/* Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. */
 document.getElementById('task13').onclick = function func() {
      const userNumber2 = Number(prompt('Put any three-digit number'));
      const number1 = parseInt(userNumber2 / 100);
    const number2 = parseInt(userNumber2 / 10) % 10;
    const number3 = userNumber2 % 10;
    if(number1===number2 || number2===number3 || number1===number3)
    alert('The same numbers were found');
    else
    alert('The same numbers were not found');
    }
    
    /* Запросить у пользователя год и проверить, високосный он или нет. 
    Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/
    document.getElementById('task14').onclick = function func() {
      const userYear = Number(prompt('Put any year'));
      if (userYear % 4 === 0 && userYear % 100 != 0 || userYear % 400 == 0)
      alert('This year is leap');
      else
      alert('This year is not leap');
    }
      
/*Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.*/
document.getElementById('task15').onclick = function func() {
        let userNumber = prompt ('Put any five-digit number', '');
        let j = 0, le = userNumber.length - 1, pal = true;
        while (j <= le - j) { pal = pal && (userNumber.charAt (j) == userNumber.charAt (le - j)); j++}
        alert ('Your number '  + (pal ? ' ' : ' is not ') + 'a palindrom');
        };

    /*Написать конвертор валют.
     Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/
     document.getElementById('task16').onclick = function func() { 
    const userMoney = Number(prompt('How much money in USD do you want to exchange?'));
    const currentEurExchange = 0.85;
    const currentUahExchange = 28.05;
    const currentAznExchange = 1.7;
    const userEurOutcome = userMoney * currentEurExchange;
    const userUahOutcome = userMoney * currentUahExchange;
    const userAznExchange = userMoney * currentAznExchange;
    const userCurrency = Number(prompt('Put "1" if you want to exchange to EUR; Put "2" for UAH and "3" for AZN?'));
    switch (userCurrency) {
        case 1:
        alert (`You will have ${userEurOutcome} EUR`);  
          break;
     
        case 2:
            alert (`You will have ${userUahOutcome} UAH`);
            break;
        case 3:
            alert (`You will have ${userAznExchange} AZN`);

    }};

/*Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
     от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.*/
document.getElementById('task17').onclick = function func() { 
    const userSum = Number(prompt ('Put your purchase amount'));
    const userDiscount3 = userSum - (userSum/100*3);
    const userDiscount5 = userSum - (userSum/100*5);
    const userDiscount7 = userSum - (userSum/100*7);
    switch (true) {
        case userSum < 200:
        alert (`You do not deserve any discounts`);  
          break;
     
        case userSum > 200 && userSum < 300:
            alert (`Your amount with discount is ${userDiscount3}`);  
                break;  
        case userSum > 300 && userSum < 500:
            alert (`Your amount with discount is ${userDiscount5}`);  
                break;  
        case userSum > 500 :
            alert (`Your amount with discount is ${userDiscount7}`);  
                break;
     }};


/*Запросить у пользователя длину окружности и периметр квадрата. 
Определить, может ли такая окружность поместиться в указанный квадрат. */
document.getElementById('task18').onclick = function func() {
const userСircumference = Number(prompt ('Put the circle сircumference '));
const pi = 3.14;
const diameterUserCircle = userСircumference / pi;
const userSquarePerimeter = Number (prompt('Put the square perimeter'));
const lengthSquare = userSquarePerimeter / 4;
if (diameterUserCircle < lengthSquare)
alert ('The circle fit in the square');
else 
alert ('The circle does not fit in the square');
}

/*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
 За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов. */

 document.getElementById('task19').onclick = function func() {
    const userQuestion1 = Number(prompt('Do you learn Javascript? 1 - yes; 2 - sometimes; 3 - no;'));
    const userQuestion2 = Number(prompt('Do you learn English? 1 - yes; 2 - sometimes; 3 - no;'));
    const userQuestion3 = Number(prompt('Do you like programming? 1 - yes; 2 - when my code works; 3 - no;'));
    let score = 0;
    if (userQuestion1 == 1)
        {score += 2};
    if (userQuestion2 == 1)
        {score += 2};
    if (userQuestion3 == 1)
        {score += 2};
    alert(`Your score is  ${score} points`);
 }

 /*Запросить дату (день, месяц, год) и вывести следующую за ней дату.
  Учтите возможность перехода на следующий месяц, год, а также високосный год.*/
  document.getElementById('task20').onclick = function func() {
    let date = prompt('Enter the date - day-month-year ');
    date = date.split('-');
    let oldDate = new Date(date[2], date[1]-1, date[0]); 
    oldDate.setDate(oldDate.getDate()+1);
    alert(`The next day is ${oldDate}`);
  }}