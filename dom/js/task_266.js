const inputEl = document.getElementById('myInput');

inputEl.addEventListener('focus', function() {
  this.value = 1;
});

inputEl.addEventListener('blur', function() {
  this.value = 2;
});

// 2
const buttonEl = document.getElementById('myButton');
let count = 1;

buttonEl.addEventListener('click', function() {
  this.value = ++count;
});