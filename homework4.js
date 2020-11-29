export const homework4 = () => {
/*Lesson 4: Функції
1. Написать функцию, которая принимает 2 числа и возвращает -1, если
    первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 –
    если числа равны.*/

document.getElementById('task31').onclick = function func() {
     let defining;
     const calc = function (a, b) {
        if (a < b) {
            defining = -1;
        } else if (a > b) {
            defining = 1;
        } else defining = 0;
        return defining;
    };          
    const userFirstNumber =  Number(prompt('Put any number'));
    const userSecondNumber = Number(prompt('Put one more number'));
    alert (`If your first number is smaller than second you will get "-1". 
If your first number is bigger than second you will get "1". 
If your numbers are equal you will get "0"`);
    alert (calc(userFirstNumber, userSecondNumber));
                  }
/*2. Написать функцию, которая вычисляет факториал переданного ей
    числа. */
    document.getElementById('task32').onclick = function func() {

        function factorial(num)
        {
            let a = 1;
            for (var i = 2; i <= num; i++)
                a = a * i;
            return a;
        }
        
        alert(factorial(prompt('Put any number and I will count its factorial')))

}
/*3. Написать функцию, которая принимает три отдельные цифры и
    превращает их в одно число. Например: цифры 1, 4, 9 превратятся в
    число 149.*/
    document.getElementById('task33').onclick = function func() {
       

        function uniting(a, b, c)
        {
            const unitedNumber = Number(a + b + c);
            return unitedNumber;
        }
        const userNumber1 =  String(prompt('Put any number'));
        const userNumber2 =  String(prompt('Put one more number'));
        const userNumber3 =  String(prompt('Put one more number'));
        alert (uniting(userNumber1, userNumber2, userNumber3))
    }
/* 4. Написать функцию, которая принимает длину и ширину прямоугольника
    и вычисляет его площадь. 
    Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. */
    document.getElementById('task34').onclick = function func() {
        const userNumber4 = Number(prompt('Put the length of your area side'));
        const userNumber5 = Number(prompt('Put the length of the second area side'));
        
        function calcArea(a, b) {


            if (!b) {
                const oneSide = a * a;
                return oneSide;
            } 
            if (!a) {
                const oneSide = b * b;
                return oneSide;
            } 
            
            else {
                const twoSides = a * b;
                return twoSides;
            }
        }   
    alert (calcArea(userNumber4, userNumber5));
    }

    /*5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
    Совершенное число – это число, равное сумме всех своих собственных делителей. */
    document.getElementById('task35').onclick = function func() {
        const userNumber6 = Number(prompt('Put any number'));
        function perfectNumber(a) {
            let b = 0;
            for (let i = 1; i < a; i++) {
                if (a % i === 0) {
                    b += i;
                }
            }
            return b === a;
        }
        alert(`Your number is perfect`)
    }

 /* 6. Написать функцию, которая принимает минимальное и максимальное
        значения для диапазона, и выводит только те числа из диапазона,
        которые являются совершенными. 
        Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. */
        document.getElementById('task36').onclick = function func() {
            const diapasonStart = Number(prompt('Put the diapason start'));
            const diapasonFinish = Number(prompt('Put the diapason finish'));
            function perfectNumber(a) {
                let b = 0;
                for (let i = 1; i < a; i++) {
                    if (a % i === 0) {
                        b += i;
                    }
                }
                return b === a;
            }
            function perfectNumberFromDiapasone(min, max) {
                const num = [];
                for (let i = min; i < max; i++) {
                    if (perfectNumber(i)) {
                        num.push(i);
                    }
                }
                return num;
            }
            alert(`Perfect numbers drom your diapason are: ${perfectNumberFromDiapasone(diapasonStart, diapasonFinish)}`);
            }
    /*7. Написать функцию, которая принимает время (часы, минуты, секунды)
            и выводит его на экран в формате «чч:мм:сс».
        Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */
        document.getElementById('task37').onclick = function func() {
            const userHours = Number(prompt('Put any hours', '01'));
            while(userHours>24){
                alert(`Error! Please put any hours from 01 to 24`);
                userHours = Number(prompt('Put any hours', '01'));
             }
            const userMinutes = Number(prompt('Put any minutes', '01'));
            while(userMinutes>60){
                alert(`Error! Please put any minutes from 01 to 60`);
                userMinutes = Number(prompt('Put any minutes', '01'));
             }
            const userSeconds = Number(prompt('Put any seconds', '01'));
            while(userSeconds>60){
                alert(`Error! Please put any seconds from 01 to 60`);
                userSeconds = Number(prompt('Put any seconds', '01'));
             }
            function setTime(h) {
                return function setMinutes(m = 0) {
                  return function setSeconds(s = 0) {
                    return `${h}:${m}:${s}`
                  }
                }
              }
              
              const time = setTime(userHours)(userMinutes)(userSeconds);
              alert(`Your time is ${time}`)
        }
    /* 8. Написать функцию, которая принимает часы, минуты и секунды и
            возвращает это время в секундах.*/
    document.getElementById('task38').onclick = function func() {
        const userHours1 = Number(prompt('Put any hours', '01'));
        while(userHours1>24){
            alert(`Error! Please put any hours from 01 to 24`);
            userHours1 = Number(prompt('Put any hours', '01'));
         }
        const userMinutes1 = Number(prompt('Put any minutes', '01'));
        while(userMinutes1>60){
            alert(`Error! Please put any minutes from 01 to 60`);
            userMinutes1 = Number(prompt('Put any minutes', '01'));
         }
        const userSeconds1 = Number(prompt('Put any seconds', '01'));
        while(userSeconds1>60){
            alert(`Error! Please put any seconds from 01 to 60`);
            userSeconds1 = Number(prompt('Put any seconds', '01'));
         }

         function calcSeconds(a, b, c) {
            const hours = a*3600;
            const minutes = b*60; 
            const userTimeInSeconds = hours+minutes+c;
            return userTimeInSeconds;
         }

         const time1 = calcSeconds(userHours1, userMinutes1, userSeconds1);
         alert(`You put ${time1} seconds`);
    }

    /* 9. Написать функцию, которая принимает количество секунд, переводит
        их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/
        document.getElementById('task39').onclick = function func() {
        const userSeconds2 = Number(prompt('Put any seconds', '01')); 
        function calcTime(x) {
        x = Math.floor(x / 3600) + " : " + (Math.floor(x / 60) - (Math.floor(x / 3600) * 60)) + " : " + (x % 60)
        return x};
        const userTime3 = calcTime(userSeconds2);
        alert(`Your seconds transformed in a time: ${userTime3}`)
        }

    /* 10. Написать функцию, которая считает разницу между датами. 
    Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
    При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»  */
    document.getElementById('task40').onclick = function func() {
        const userHours2 = Number(prompt('Put any hours from the first date', '01'));
        while(userHours2>24){
            alert(`Error! Please put any hours from 01 to 24`);
            userHours2 = Number(prompt('Put any hours from the first date', '01'));
         }
        const userMinutes2 = Number(prompt('Put any minutes from the first date', '01'));
        while(userMinutes2>60){
            alert(`Error! Please put any minutes from 01 to 60`);
            userMinutes2 = Number(prompt('Put any hours from the first date', '01'));
         }
        const userSeconds2 = Number(prompt('Put any seconds from the first date', '01'));
        while(userSeconds2>60){
            alert(`Error! Please put any seconds from 01 to 60`);
            userSeconds2 = Number(prompt('Put any seconds from the first date', '01'));
         }


         const userHours3 = Number(prompt('Put any hours from the second date', '01'));
        while(userHours3>24){
            alert(`Error! Please put any hours from 01 to 24`);
            userHours3 = Number(prompt('Put any hours from the second date', '01'));
         }
        const userMinutes3 = Number(prompt('Put any minutes from the second date', '01'));
        while(userMinutes3>60){
            alert(`Error! Please put any minutes from 01 to 60`);
            userMinutes3 = Number(prompt('Put any hours from the second date', '01'));
         }
        const userSeconds3 = Number(prompt('Put any seconds from the second date', '01'));
        while(userSeconds3>60){
            alert(`Error! Please put any seconds from 01 to 60`);
            userSeconds3 = Number(prompt('Put any seconds from the second date', '01'));
         }

         function calcSeconds(a, b, c) {
            const hours = a*3600;
            const minutes = b*60; 
            const userTimeInSeconds = hours+minutes+c;
            return userTimeInSeconds;
         }

        const timeInSecondsFirstDate = calcSeconds(userHours2, userMinutes2, userSeconds2);
        const timeInSecondsSecondDate = calcSeconds(userHours3, userMinutes3, userSeconds3);
        let timeDifferenceInSeconds;
        
        function calcTimeDifference(a, b) {
            
            if (a > b) {
               timeDifferenceInSeconds = a - b; 
               
            }
            else {
                timeDifferenceInSeconds = b - a;
            }
            return timeDifferenceInSeconds
        }
        const result = calcTimeDifference(timeInSecondsFirstDate, timeInSecondsSecondDate);
        function calcTime(x) {
            x = Math.floor(x / 3600) + " : " + (Math.floor(x / 60) - (Math.floor(x / 3600) * 60)) + " : " + (x % 60)
            return x};
        const transformingSecondsToTime = calcTime(result);
        alert(`Time between your periods is ${transformingSecondsToTime}`)
    } 
}
