// Получаем все абзацы с классом "number"
const numbers = document.querySelectorAll('.number');

// Добавляем обработчик события клика на каждый абзац
numbers.forEach(function(number) {
  number.addEventListener('click', function() {
    // Получаем число из текста абзаца и возводим его в квадрат
    const squaredNumber = Math.pow(parseInt(number.innerText), 2);
    // Заменяем текст абзаца на результат возведения в квадрат
    number.innerText = squaredNumber;
  });
});
