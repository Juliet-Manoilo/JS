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
}

/* 4. Определить количество цифр в введенном числе. */
document.getElementById('task24').onclick = function func() {
	const userNumber4 = String(prompt('Put any number'));
	const userDigits = String(userNumber4).length;
	alert(`Your number consist of ${userDigits} digits`);
}

/* 5. Запросить у пользователя 10 чисел и подсчитать, 
сколько он ввел положительных, отрицательных и нулей. 
При этом также посчитать, сколько четных и нечетных. 
Вывести статистику на экран. 
Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. */
document.getElementById('task25').onclick = function func() {		
let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0;
let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i < 10; i++) {let userNumber5 = +prompt('Enter a number');
if (userNumber5 > 0) {
	++positiveNumbers;
} else
{
	++negativeNumbers
};
if (userNumber5 === 0) {
	++zero;
}; 
if 
	(userNumber5 % 2 === 0) {
		++evenNumber;}
	 else {
		++oddNumber;
	}};
alert (`You put ${positiveNumbers} positive numbers, ${negativeNumbers} negative numbers, ${zero} zeros, ${evenNumber} even numbers and ${oddNumber} odd numbers`)
}

/*6. Зациклить калькулятор. 
Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
И так до тех пор, пока пользователь не откажется.*/
document.getElementById('task26').onclick = function func() {
const userNumber6 = Number(prompt('Put any number'));
const userNumber7 = Number(prompt('Put one more number'));
const calcFunction = prompt('Which calculator function do you want to use: "+", "-", "*" or "/"?');
let repeating = true;
let calcResult;
while (repeating) {
	if (calcFunction = '+') {
		calcResult = userNumber6 + userNumber7;}
alert (`${calcResult}`);
	
repeating = confirm('Do want to repeat a calculator function?')}


	



}
}
