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

///const userDistance = Number(prompt('Put the distance between A and B in km'));
///alert(AverageTime(userDistance));


}}