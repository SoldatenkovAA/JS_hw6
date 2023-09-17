// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let numArray = [];
numArray[0] = prompt('Введите 1 число');
numArray[1] = prompt('Введите 2 число');
numArray[2] = prompt('Введите 3 число');
function maxValue(numArray) {
    return Math.max.apply(null, numArray)
}
alert(`Максимальное значение: ${maxValue(numArray)}`);