// 1
const today = new Date();
const dayOfMonth = today.getDate();

const oneMonthAgo = new Date(today);
oneMonthAgo.setMonth(today.getMonth() - 1);
oneMonthAgo.setDate(dayOfMonth);

const dayOfWeek = oneMonthAgo.getDay();
