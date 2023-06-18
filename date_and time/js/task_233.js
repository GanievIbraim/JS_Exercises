function getLastDayOfWeek(month, year) {
    const date = new Date(year, month, 0);
    const lastDayOfWeek = date.getDay();
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    
    return daysOfWeek[lastDayOfWeek];
  }
  
  console.log(getLastDayOfWeek(5, 2025)); // 'Сб'
  