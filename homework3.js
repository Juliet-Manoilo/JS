export const homework3 = () => {
/* LESSON 3 - Циклы
1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.*/

document.getElementById('task21').onclick = function func() {
let start = Number(prompt("Put the diapason beginning ",""));
const finish = Number(prompt("Put the diapason finish",""));
let sum = 0;
 
while(start <= finish){       
       sum+=start;  
       start++;
    }
 
alert(`The sum of numbers in your diapason is ${sum}`);}

/*2. Запросить 2 числа и найти только наибольший общий делитель.   */
document.getElementById('task22').onclick = function func() {
let userNumber = Number(prompt('Put any number'));
let userNumber2 = Number(prompt('Put one more number'));
let greatestCommonDivisor;
while (userNumber!=userNumber2)
{
	if (userNumber>userNumber2)
	{
		userNumber = userNumber -userNumber2;
	}
	else
	{
		userNumber2 = userNumber2 - userNumber;
	}
}
greatestCommonDivisor = userNumber;
alert(`The greatest common divisor of your numbers is ${greatestCommonDivisor}`)

}

/* 3. Запросить у пользователя число и вывести все делители этого числа. */
document.getElementById('task23').onclick = function func() {
	const userNumber3 = Number(prompt('Put any number'));
	let divisors = '1';
    for (let i = 2; i <= userNumber3; i++) {
        if (userNumber3 % i == 0) {
            divisors += `, ${i}`;
        }
    }
    alert(`The divisors of your number are ${divisors}`);
}}

/* 4. Определить количество цифр в введенном числе. */
document.getElementById('task24').onclick = function func() {
	const userNumber4 = Number(prompt('Put any number'));
}