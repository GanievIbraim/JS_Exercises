const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

const endOfDay = new Date(year, month, day + 1);
const hoursDiff = Math.floor((endOfDay - now) / 3600000);
