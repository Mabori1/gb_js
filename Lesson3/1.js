"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

prompt("Введите число");
const number = +prompt();
alert(`Куб числа ${number} равен ${cube(number)}`);

function cube(number) {
  return number * number * number;
}
