const currentYear = new Date().getFullYear();
const date1 = new Date(`${currentYear}-${date1}`);
const date2 = new Date(`${currentYear}-${date2}`);

if (date1 > date2) {
  console.log(`${date1.toDateString()} больше, чем ${date2.toDateString()}`);
} else if (date1 < date2) {
  console.log(`${date2.toDateString()} больше, чем ${date1.toDateString()}`);
} else {
  console.log(`${date1.toDateString()} и ${date2.toDateString()} равны`);
}
