var elem = document.querySelector('#elem');
var hasClass = elem.classList.contains('ggg');

if (hasClass) {
  console.log('Класс ggg есть у элемента');
} else {
  console.log('Класс ggg отсутствует у элемента');
}