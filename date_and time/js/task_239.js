const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const startDate = new Date(currentYear, currentMonth, 20);
const endDate = new Date(currentYear + (currentMonth === 11 ? 1 : 0), (currentMonth + 1) % 12, 10);

const daysDiff = Math.round((endDate - startDate) / (24 * 60 * 60 * 1000));
