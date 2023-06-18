// 1
function getNextLeapYear() {
  let year = new Date().getFullYear();

  while (true) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return year;
    }
    year++;
  }
}

console.log(`Следующий високосный год: ${getNextLeapYear()}`);

// 2
const now = new Date();
const currentYear = now.getFullYear();
const nextYear = currentYear + 1;
const nextYearStart = new Date(`January 1, ${nextYear} 00:00:00`);
const daysDiff = Math.floor((nextYearStart - now) / 86400000);

console.log(`До Нового года осталось ${daysDiff} дней.`);

// 3
const now_3 = new Date();
const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const secondsDiff = Math.floor((now - startOfDay) / 1000);

console.log(`Секунд, прошедших с начала дня до настоящего момента времени: ${secondsDiff} сек.`);

