function getWeekDay(date) {
  let nameDay = null;
  switch(date.getDay() ){
    case 0: 
      nameDay = "ВС";
      break;
    case 1: 
      nameDay = "ПН";
      break;
    case 2: 
      nameDay = "ВТ";
      break;
    case 3: 
      nameDay = "СР";
      break;
    case 4: 
      nameDay = "ЧТ";
      break;
    case 5: 
      nameDay = "ПТ";
      break;
    case 6: 
      nameDay = "СБ";
      break;

  }

  return nameDay;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );