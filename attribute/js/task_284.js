var elem = document.querySelector('#elem');
var numClasses = elem.classList.length;
console.log(numClasses);

var elem2 = document.querySelector('#elem2');
var classes = elem2.classList;

classes.forEach(function(className) {
  console.log(className);
});