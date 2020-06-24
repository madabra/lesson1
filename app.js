//onst firstName = 'Pavel';
//onst lastName = 'Stepanov'
/* let age = 26; let rost = 172;
age = 19
const programmerLiJa = true
//console.log(lastName, age, programmerLiJa, rost) 

const _peremennaja = 1
const $ = true
const withNumber3 = 3

        //2 глава.
//alert('Имя человека: ' + name + lastName + ', а возраст: ' + age)
//console.log(age)
*/
//const firstName = prompt('Введите имя')
//alert(firstName + '' + lastName)

//3 глава. Операторы

//let currentYear = 2020
//const birthYear = 2001
////const age = currentYear - birthYear
//const a = 6
//const b = 3
//
//let c = 32
//c += a
//
//console.log(a+b)
//console.log(a-b)
//console.log(a/b)
//console.log(--currentYear)
//console.log(--currentYear)
//console.log(c)

//4. Основные типы данных
//const isProgrammer = true
//const name = 'Pavel'
//const age = 19
//let x
//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//null 

////5. Приоритет операторов
//const fullAge = 19
//const birthYear = 2000
//const currentYear = 2020
//
//const isFullAge = (currentYear - birthYear) >= fullAge
//
//console.log(isFullAge)

//6. Условные операторы
//const courseStatus = prompt('Введите статус курса')//ready, fail, pending
//alert(courseStatus)
//if (courseStatus === 'ready') {
//    console.log('Курс готов и его можно проходить')
//}
//
//else if (courseStatus === 'pending') {
//    console.log('Курс находится в разработке')
//}
//
//else if (courseStatus === 'fail') {
//    console.log('Курс не пройден')
//}
//
//else {
//    console.log('Произошла ошибка :( ')
//}
//
const isReady = false
//
//if (isReady) {
//    console.log('Всё готово')
//}
//else {
//    console.log('Всё не готово')
//}

//const num1 = 42
//const num2 = '42'
//
//console.log(num1 === num2)

//isReady ? console.log('Всё готово') : console.log('Всё не готово')

//7. Булевая логика

// 8 Функции

function calculateAge(year) {
    return 2020 - year
} 

//console.log(calculateAge( year= 2008))
//console.log(calculateAge( year= 2001))
//console.log(calculateAge( year= 1997))
//console.log(calculateAge( year= 2002))

//function logInfoAbout(name, year) {
//    const age = calculateAge(year)
//    
//    if (age > 0) {
//        console.log('Человек по имени ' + name + ' cейчас имеет возраст ' + age)
//    }
//    else {
//        console.log('Человек по имени ' + name + ' родится в ' + year + ' году')
//    }
//}
//
//logInfoAbout( name= 'Павел', year= 2001)
//
//logInfoAbout( name= 'Гавел', year= 2021)
//
//logInfoAbout( name= 'Аня', year= 2007)

//9. Массивы
const cars = ['Мазда', 'Мерс', 'Бмв']
console.log(cars.length)

console.log(cars[2])

cars[0] = 'Порше'

cars[3] = 'Martin'
cars[cars.length] = 'Lada'

console.log(cars)