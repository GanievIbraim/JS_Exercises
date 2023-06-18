const input = document.getElementById('myInput');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  const inputType = input.type; // Получаем значение атрибута "type" у инпута
  console.log(inputType); // Выводим значение в консоль
});

//
const image = document.getElementById('myImage');
const button2 = document.getElementById('myButton2');

button.addEventListener('click', () => {
  image.width = 300; // Изменяем значение атрибута "width" у картинки на 300
});
