var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var btn = document.querySelector('#btn');
var result = document.querySelector('#result');

function solve() {
  var aValue = parseFloat(a.value);
  var bValue = parseFloat(b.value);
  var cValue = parseFloat(c.value);

  var discriminant = bValue * bValue - 4 * aValue * cValue;

  if (discriminant < 0) {
    result.innerHTML = "Уравнение не имеет действительных корней";
  } else if (discriminant === 0) {
    var root = -bValue / (2 * aValue);
    result.innerHTML = "Уравнение имеет один корень: " + root;
  } else {
    var sqrtDiscriminant = Math.sqrt(discriminant);
    var root1 = (-bValue + sqrtDiscriminant) / (2 * aValue);
    var root2 = (-bValue - sqrtDiscriminant) / (2 * aValue);
    result.innerHTML = "Уравнение имеет два корня: " + root1 + " и " + root2;
  }
}

btn.addEventListener('click', solve);