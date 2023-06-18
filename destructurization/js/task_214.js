function func() {
    return (new Date).getDate();
  }
  
  let [year = new Date().getFullYear(), month = new Date().getMonth() + 1, day = func()] = arr;
  