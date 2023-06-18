// Получаем текущую дату
const currentDate = new Date();

// Получаем номер дня недели (от 0 до 6, где 0 - воскресенье, 1 - понедельник, и т.д.)
const currentDayOfWeek = currentDate.getDay();

// Выводим номер текущего дня недели в консоль
console.log(`Номер текущего дня недели: ${currentDayOfWeek}`);

// Определяем, является ли текущий день недели выходным или рабочим
if (currentDayOfWeek === 0 || currentDayOfWeek === 6) {
  console.log('Текущий день недели - выходной');
} else {
  console.log('Текущий день недели - рабочий');
}

// Определяем количество дней до ближайшего воскресенья
const daysUntilSunday = 7 - currentDayOfWeek;
console.log(`До ближайшего воскресенья осталось ${daysUntilSunday} дней`);
