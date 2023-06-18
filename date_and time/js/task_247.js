function getZodiacSign(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Овен';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Телец';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return 'Близнецы';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return 'Рак';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Лев';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Дева';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return 'Весы';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return 'Скорпион';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Стрелец';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'Козерог';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Водолей';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Рыбы'
  }
}

const date = new Date('1995-06-25');
const zodiacSign = getZodiacSign(date);

console.log(`Знак Зодиака для даты ${date.toDateString()}: ${zodiacSign}`);
