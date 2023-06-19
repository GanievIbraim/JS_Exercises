var elem = document.querySelector('#elem');
var price = elem.getAttribute('data-product-price');
var amount = elem.getAttribute('data-product-amount');

elem.addEventListener('click', function() {
  var totalPrice = price * amount;
  this.innerHTML += ' ' + totalPrice + ' руб.';
});