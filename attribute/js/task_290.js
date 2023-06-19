var elem = document.querySelector('#elem');
var btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  elem.style.fontSize = '20px';
  elem.style.borderTop = '1px solid black';
  elem.style.background = 'lightblue';
});