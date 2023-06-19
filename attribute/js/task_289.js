var elem = document.querySelector('#elem');
var btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  elem.style.width = '200px';
  elem.style.height = '200px';
  elem.style.border = '1px solid black';
});