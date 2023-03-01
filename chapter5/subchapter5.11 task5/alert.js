function getLastDayOfMonth(year, month) {   
  return (new Date(year, month + 1, 0).getDate() );

};

alert( getLastDayOfMonth(2012, 1) ); //29
alert( getLastDayOfMonth(2023, 4) ); //31
alert( getLastDayOfMonth(2022, 11) ); //31
alert( getLastDayOfMonth(2023, 0) ); //31