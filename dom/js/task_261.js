// 1
const input = document.getElementById('myInput');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  input.value = 'Какой-нибудь текст'; // Записываем текст в значение инпута
});


// 2
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button2 = document.getElementById('myButton2');

button2.addEventListener('click', () => {
  const number = Number(input1.value); // Получаем значение из первого инпута и приводим его к числу
  const square = number ** 2; // Возводим число в квадрат
  
  input2.value = square; // Записываем квадрат во второй инпут
});

// 3
function calculateAverage() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);
  let num4 = parseFloat(document.getElementById('num4').value);
  let num5 = parseFloat(document.getElementById('num5').value);
  let average = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById('result').innerHTML = "Среднее арифметическое: " + average;
}