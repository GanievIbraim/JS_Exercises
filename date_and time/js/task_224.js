// Функция для добавления нуля перед числами < 10
function addLeadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  
  // Получаем текущую дату-время
  const currentDate = new Date();
  
  const currentHour = addLeadingZero(currentDate.getHours());
  const currentMinute = addLeadingZero(currentDate.getMinutes());
  const currentSecond = addLeadingZero(currentDate.getSeconds());
  const currentDay = addLeadingZero(currentDate.getDate());

  const currentMonth = addLeadingZero(currentDate.getMonth() + 1);
  const currentYear = currentDate.getFullYear();
  
  const formattedDateTime = `${currentHour}:${currentMinute}:${currentSecond} ${currentDay}.${currentMonth}.${currentYear}`;
  
  console.log(formattedDateTime);
  