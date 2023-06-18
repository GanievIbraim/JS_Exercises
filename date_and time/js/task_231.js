let date1 = new Date('September 1, 2000');
let date2 = new Date('February 15, 2010');

let diffMs = date2 - date1;

let msInDay = 1000 * 60 * 60 * 24;


let diffDays = Math.floor(diffMs / msInDay);
let diffMonths = Math.floor(diffDays / 30.44);
let diffYears = Math.floor(diffMonths / 12);

let remainingMonths = diffMonths % 12;
let remainingDays = diffDays % 30.44; 

console.log(`Разница между датами: ${diffYears} лет, ${remainingMonths} месяцев, ${Math.round(remainingDays)} дней`);
