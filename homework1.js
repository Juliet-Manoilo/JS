/* Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»  */
document.getElementById('task1').onclick = function func() {
    const userName = prompt('What is your name?')
    alert(`Hello, ${userName}!`)};
    
    /* Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
    Текущий год укажите в коде как константу. */
    document.getElementById('task2').onclick = function func() {
    const currentYear = 2020;
    const userYearBirth = Number(prompt('Year of your birth?'))
    const userAge = currentYear - userYearBirth
     alert(`Your age is  ${userAge}`)};
    
    /* Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.  */
    document.getElementById('task3').onclick = function func() {
    const perimeter = 4;
    const userLength = Number(prompt('Length of your square side?'))
    const userPerimeter = userLength * perimeter
    alert (`Perimeter of your square is  ${userPerimeter}`)};
    
    /* Запросите у пользователя радиус окружности и выведите площадь такой окружности.  */
    document.getElementById('task4').onclick = function func() {
    const pi = 3.14;
    const userRadius = Number(prompt('Put the radius'))
    const circleArea = userRadius *2 *pi
    alert (`Area of your circle is  ${circleArea}`)};
    
    /* Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
    Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.  */
    document.getElementById('task5').onclick = function func() {
    const userDistance = Number(prompt('Put the distance between A and B in km'))
    const userTime = Number(prompt('How many hours do you want to spent on this travel?'))
    const userSpeed = userDistance / userTime
    alert (`You should move with a speed  ${userSpeed} km/hour`)};
    
    /* Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.  */
    document.getElementById('task6').onclick = function func() {
    const currentExchange = 0.85;
    const userUsdQuantity = Number(prompt('How much money do you want to exchange USD to Euro?'))
    const userEuroAmount = currentExchange * userUsdQuantity
    alert (`You will have  ${userEuroAmount}  EURO`)};
    
    /* Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.  */
    document.getElementById('task7').onclick = function func() {
    const gigabyte = 1024;
    const file = 820;
    const userCard = Number(prompt('How many gigabytes contain your card?'))
    const userFilesQuantity = userCard * gigabyte / file
    alert (`Your card storage can contain   ${userFilesQuantity}  files per 820 Mb`)};
    
    /* Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
    Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.  */
    document.getElementById('task8').onclick = function func() {
    const userMoney = Number(prompt('How much money do you want to spent on chokolate bars?'))
    const barPrice = Number(prompt('How much money does chokolate bar costs?'))
    const userChocolate = userMoney / barPrice
    const oddMoney = userMoney % barPrice
    alert (`You can buy  ${userChocolate} chocolate bars and your odd money is  ${oddMoney}`)};
    
    /* Запросите у пользователя трехзначное число и выведите его задом наперед. 
    Для решения задачи вам понадобится оператор % (остаток от деления).  */
    document.getElementById('task9').onclick = function func() {
    const userNumber = Number(prompt('Put any number'));
    let x = userNumber;
    let revers = 0;
    
      while (x > 0) {
        const y = x % 10;
        revers = revers * 10 + y;
        x = parseInt(x / 10);
      }
    let numberContrary = revers
    alert (`Your number on the contrary is  ${numberContrary}`)};
    
    /* Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. 
    Вывести сумму начисленных процентов. */
    document.getElementById('task10').onclick = function func() {
    const userCash = Number(prompt('How much money do you want to put on deposit?'))
    const bankYearPercent = 5
    const monthsPerYear = 12
    const twoMonthPercent = bankYearPercent / monthsPerYear * 2
    const userSummary = userCash + twoMonthPercent
    const userEarning = userCash * twoMonthPercent / 100
    alert (`You will earn  ${userEarning}  for 2 months`)};
    