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
        
        
            }}
