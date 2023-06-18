// Получаем текущую дату
const currentDate = new Date();

const currentDay = currentDate.getDate();
console.log(`Текущий день: ${currentDay}`);

const currentMonth = currentDate.getMonth() + 1;
console.log(`Текущий месяц: ${currentMonth}`);

const currentYear = currentDate.getFullYear();
console.log(`Текущий год: ${currentYear}`);
