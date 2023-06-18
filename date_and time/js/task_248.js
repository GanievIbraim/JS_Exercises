// 1
const now = new Date();
const noonToday = new Date();
noonToday.setHours(12, 0, 0, 0);

if (now >= noonToday) {
  console.log('Полдень уже был');
} else {
  console.log('Полдень еще не наступил');
}


// 2
const now_2 = new Date();
const midMonth = new Date();
midMonth.setDate(15);

if (now >= midMonth) {
  console.log('Прошла уже половина месяца');
} else {
  console.log('Половина месяца еще не наступила');
}
