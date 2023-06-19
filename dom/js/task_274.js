// Получаем все элементы li на странице
var years = document.getElementsByTagName("li");

// Создаем переменную для хранения суммы годов
var sum = 0;

// Итерируемся по всем годам и проверяем, удовлетворяет ли сумма цифр условию
for (var i = 0; i < years.length; i++) {
  var year = parseInt(years[i].innerHTML);
  var digits = year.toString().split("");
  var digitSum = 0;

  for (var j = 0; j < digits.length; j++) {
    digitSum += parseInt(digits[j]);
  }

  if (digitSum === 6) {
    sum += year;
  }
}

// Выводим результат в консоль
console.log("Сумма годов: " + sum);
