const currentYear = new Date().getFullYear();
let count = 0;

for (let year = 2000; year <= currentYear; year++) {
  const jan1 = new Date(year, 0, 1);
  const dayOfWeek = jan1.getDay();
  
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    count++;
  }
}

console.log(`Количество раз, когда 1 января в промежутке от 2000 года до ${currentYear} года приходился на выходной день: ${count}`);
