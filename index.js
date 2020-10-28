const userName = prompt('What is your name?')
alert(`Hello, ${userName}!`)

const currentYear = 2020;
const userYearBirth = Number(prompt('Year of your birth?'))
alert(currentYear - userYearBirth);

const perimeter = 4;
const userLength = Number(prompt('Length of your square side?'))
alert(userLength * perimeter);

const pi = 3.14;
const userRadius = Number(prompt('Put the radius'))
alert(userRadius *2 *pi);

const userDistance = Number(prompt('Put the distance between A and B in km'))
const userSpeed = Number(prompt('How many hours do you want to spent on this travel?'))
alert(userDistance / userSpeed);

const currentExchange = 0.85;
const userUsdQuantity = Number(prompt('How much money do you want to exchange USD to Euro?'))
alert(currentExchange * userUsdQuantity);

const gigabyte = 1024;
const file = 820;
const userCard = Number(prompt('How many gigabytes contain your card?'))
alert(userCard * gigabyte / file);

const userMoney = Number(prompt('How much money do you want to spent on chokolate bars?'))
const barPrice = Number(prompt('How much money does chokolate bar costs?'))
alert(userMoney / barPrice)
alert(userMoney % barPrice);

const userNumber = Number(prompt('Put any number'));
var x = userNumber;
var revers = 0;

  while (x > 0) {
    var y = x % 10;
    revers = revers * 10 + y;
    x = parseInt(x / 10);
  }
alert (revers)

const userCash = Number(prompt('How much money do you want to put on deposit?'));
const bankYearPercent = 5
const monthsPerYear = 12
const twoMonthPercent = bankYearPercent / monthsPerYear * 2
const userSummary = userCash + twoMonthPercent
alert(userCash * twoMonthPercent / 100);
