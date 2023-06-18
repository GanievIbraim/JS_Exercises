// Исходная дата в формате год-месяц-день
const dateStr = '2023-06-18';

const [year, month, day] = dateStr.split('-');

const dayNum = parseInt(day);
const monthNum = parseInt(month);
const yearNum = parseInt(year);

const newDateStr = `${dayNum}.${monthNum}.${yearNum}`;

// Выводим новую дату в консоль
console.log(newDateStr);
