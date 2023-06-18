const today = new Date();
const dayOfMonth = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const oneYearAgo = new Date(year - 1, month, dayOfMonth);
const dayOfWeek = oneYearAgo.getDay();
