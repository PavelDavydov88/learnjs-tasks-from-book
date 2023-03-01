function getWeekDay(date) {
  let numberDay = date.getDay();
  if (!numberDay) numberDay = 7;
  return numberDay;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );
