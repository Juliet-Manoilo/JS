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
    'manufacturer': 'Ford',
    'model': 'Focus',
    'year': '2016',
    "average speed": '70 km/h'
};
function autoInfo(automobile) {
    return automobile.manufacturer, automobile.model, automobile.year, automobile['average speed']
}
function calcTime(automobile, distance) {
    
    let time = distance / automobile['average speed'];
    time = (parseInt(time/4) + time);
    return time;
}
const info = autoInfo(automobile);
alert(`The info about an automobile: ${info}`)
const userDistance = Number(prompt('Put the distance between A and B in km'));
const timeCalc = calcTime(automobile, userDistance);
alert(`You need ${timeCalc} hours for getting your destination`)
}}