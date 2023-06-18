const paragraph = document.getElementById('myParagraph');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  paragraph.textContent = 'Новый текст';
});

const number = document.getElementById('myNumber');
const button2 = document.getElementById('myButton2');

button.addEventListener('click', () => {
  const currentValue = Number(number.textContent);
  const newValue = currentValue + 1; 
  
  number.textContent = newValue;
});
