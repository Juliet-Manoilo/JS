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
    const userNumber3 = Number(prompt('Put any five-digits number'));
    
    }