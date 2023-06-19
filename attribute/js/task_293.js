const paragraphs = document.querySelectorAll('p');
const boldBtn = document.getElementById('bold-btn');
const redBtn = document.getElementById('red-btn');

boldBtn.addEventListener('click', () => {
  paragraphs.forEach(paragraph => {
    paragraph.classList.toggle('bold');
  });
});

redBtn.addEventListener('click', () => {
  paragraphs.forEach(paragraph => {
    paragraph.classList.toggle('colored');
  });
});
