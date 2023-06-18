// Массив с названиями месяцев
let months = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

// Получаем текущую дату
const currentDate = new Date();

// Получаем номер месяца (от 0 до 11, где 0 - январь, 1 - февраль, и т.д.)
const currentMonthIndex = currentDate.getMonth();

// Получаем название текущего месяца из массива
const currentMonthName = months[currentMonthIndex];

// Выводим название текущего месяца в консоль
console.log(`Текущий месяц: ${currentMonthName}`);
