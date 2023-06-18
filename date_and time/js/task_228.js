const birthday = new Date('2003-09-27');

const dayOfWeek = birthday.getDay();

const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

const dayOfWeekName = daysOfWeek[dayOfWeek];

console.log(`Мой день рождения был в ${dayOfWeekName}`);
