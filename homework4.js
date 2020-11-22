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
}
