const div = document.getElementById('myDiv');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  const className = div.className; // Получаем значение атрибута "class" у элемента
  console.log(className); // Выводим значение в консоль
});

// 2
const div2 = document.getElementById('myDiv2');
const button2 = document.getElementById('myButton2');

button2.addEventListener('click', () => {
  const classListArray = Array.from(div2.classList); // Преобразуем коллекцию classList в массив
  console.log(classListArray); // Выводим массив классов в консоль
});
