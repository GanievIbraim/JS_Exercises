const paragraph = document.getElementById('my-paragraph');
const strikeThroughBtn = document.getElementById('strike-through-btn');
const boldBtn = document.getElementById('bold-btn');
const redBtn = document.getElementById('red-btn');

strikeThroughBtn.addEventListener('click', () => {
  paragraph.style.textDecoration = 'line-through';
});

boldBtn.addEventListener('click', () => {
  paragraph.style.fontWeight = 'bold';
});

redBtn.addEventListener('click', () => {
  paragraph.style.color = 'red';
});
