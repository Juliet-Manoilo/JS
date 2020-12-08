export const homework5 = () => {
/* Lesson JS-5. Об’єкти
1.1. Создать объект, описывающий автомобиль (производитель, модель,
    год выпуска, средняя скорость), и следующие функции для работы с
    этим объектом: Функция для вывода на экран информации об автомобиле;
    Функция для подсчета необходимого времени для преодоления
    переданного расстояния со средней скоростью.
    Учтите, что через каждые 4 часа дороги водителю необходимо делать
     перерыв на 1 час. */
document.getElementById('task41').onclick = function func() {
const automobile = {
    manufacturer: 'Ford',
    model: 'Focus',
    year: '2016',
    averagespeed: '70'
}
function autoInfo(automobile) {
    for (const key in automobile) {
        alert(`${key}: ${automobile[key]}`); 
        
}}
function calcTimeForDistance(automobile, distance = 1000) {                
    let hour;
    hour = distance / automobile.averagespeed;
    hour = (parseInt(hour/4) + hour);
    return hour;
}



autoInfo(automobile);
const distance = prompt(`Enter distance`);
const timeCalc = calcTimeForDistance(automobile, distance);
alert(`You need ${timeCalc} hours for getting your destination`)
}

/* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель
    дроби, и следующие функции для работы с этим объектом: Функция
    сложения 2-х объектов-дробей; Функция вычитания 2-х объектов-дробей;
    Функция умножения 2-х объектов-дробей; Функция деления 2-х
    объектов-дробей; Функция сокращения объекта-дроби.*/
document.getElementById('task42').onclick = function func() {
    function Fraction(upNumber,downNumber){
        return {upNumber:upNumber, downNumber:downNumber};
    }
    const firstNumber = Fraction(2,3);
    const secondNumber = Fraction(3,4);

    function addition(obj1,obj2){
        const resultUpNumber = obj1.upNumber + obj2.upNumber;
        const resultDownNumber = obj1.downNumber + obj2.downNumber;
        console.log(`${resultUpNumber}/${resultDownNumber}`);
    }

    function substraction(obj1,obj2){
        const resultUpNumber = obj1.upNumber - obj2.upNumber;
        const resultDownNumber = obj1.downNumber - obj2.downNumber;
        console.log(`${resultUpNumber}/${resultDownNumber}`);
    }
    
    function multiFraction(obj1,obj2){
        const resultUpNumber = obj1.upNumber * obj2.upNumber;
        const resultDownNumber = obj1.downNumber * obj2.downNumber;
        console.log(`${resultUpNumber}/${resultDownNumber}`);
    }

    function division(obj1,obj2){
        const resultUpNumber = obj1.upNumber / obj2.upNumber;
        const resultDownNumber = obj1.downNumber / obj2.downNumber;
        console.log(`${resultUpNumber}/${resultDownNumber}`);
    }

    function converting(obj){
        let resultUpNumber = 1;
        let resultDownNumber = 1;
        for (let i = 2; i <= obj.upNumber; i++) {
            if (obj.upNumber % i === 0 &&  obj.downNumber % i === 0)
            
            resultUpNumber = obj.upNumber / i; 
            resultDownNumber = obj.downNumber / i;
                }
        console.log(`${resultUpNumber}/${resultDownNumber}`);
    }

    multiFraction(firstNumber,secondNumber);
    addition(firstNumber,secondNumber);
    substraction(firstNumber,secondNumber);
    division(firstNumber,secondNumber);
    converting(firstNumber);
    converting(secondNumber);
    alert(`Look the console for checking`);
}}