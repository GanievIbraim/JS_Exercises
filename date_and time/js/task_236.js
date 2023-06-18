const date = new Date();
date.setMonth(11); // декабрь (индексация месяцев начинается с 0)
date.setDate(31);
const dayOfWeek = date.getDay();
