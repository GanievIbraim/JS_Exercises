const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

const startOfDay = new Date(year, month, day);
const hoursDiff = Math.floor((now - startOfDay) / 3600000);
