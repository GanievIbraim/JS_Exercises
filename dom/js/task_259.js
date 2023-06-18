const paragraph = document.getElementById('myParagraph');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  const htmlCode = paragraph.innerHTML; // Получаем HTML код абзаца
  console.log(htmlCode); // Выводим HTML код в консоль
});

// 2
const paragraph2 = document.getElementById('myParagraph2');
const button2 = document.getElementById('myButton2');

button.addEventListener('click', () => {
  paragraph.innerHTML = '<strong>Новый жирный текст</strong>';
});
