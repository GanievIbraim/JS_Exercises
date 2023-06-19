var divs = document.querySelectorAll('[data-num]');

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function() {
    var num = this.getAttribute('data-num');
    this.innerHTML += ' ' + num;
  });
}

// 2
var elem = document.querySelector('#elem');
var min = elem.getAttribute('data-min');
var max = elem.getAttribute('data-max');

elem.addEventListener('blur', function() {
  if (this.value.length < min || this.value.length > max) {
    alert('Количество символов должно быть от ' + min + ' до ' + max);
  }
});