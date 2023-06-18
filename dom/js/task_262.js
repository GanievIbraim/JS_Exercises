// 1
const input = document.getElementById('myInput');

input.addEventListener('focus', () => {
  input.value = 1; // Записываем число 1 в инпут при получении фокуса
});

input.addEventListener('blur', () => {
  input.value = 2; // Записываем число 2 в инпут при потере фокуса
});


//2
const input2 = document.getElementById('myInput2');
const result = document.getElementById('result');

input2.addEventListener('blur', () => {
  const number = Number(input2.value); // Получаем число из значения инпута
  const square = number ** 2; // Возводим число в квадрат
  
  result.textContent = `Квадрат числа ${number}: ${square}`; // Выводим результат в элемент "p"
});
