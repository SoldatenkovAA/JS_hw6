// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function getThirdDegree(number) {
    return number * number * number;
}

let firstNumber = getThirdDegree(2);
// console.log(firstNumber); проверка, всё работает
let secondNumber = getThirdDegree(3);
let sum = firstNumber + secondNumber;
console.log(`2^3 + 3^3 степени будет равно ${sum}`);


