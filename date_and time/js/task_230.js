// 1
let date1 = new Date('March 1, 1988');
let date2 = new Date('January 10, 2000');

let diffMs_1 = date2 - date1;

let msInDay = 1000 * 60 * 60 * 24;

let diffDays = Math.floor(diffMs_1 / msInDay);

console.log(diffDays); // 4323

// 2
let birthdate = new Date('2003-09-27');
let today = new Date();

let diffMs_2 = today - birthdate;

let msInMonth = 1000 * 60 * 60 * 24 * 30;

let diffMonths = Math.floor(diffMs_2 / msInMonth);

console.log(diffMonths);
