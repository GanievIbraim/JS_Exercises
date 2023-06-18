const yesterdayNoon = new Date();
yesterdayNoon.setDate(yesterdayNoon.getDate() - 1);
yesterdayNoon.setHours(12, 0, 0, 0);

const now = new Date();

const hoursDiff = Math.floor((now - yesterdayNoon) / 3600000);
