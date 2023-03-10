function formatDate(date) {   
  let timeWent = Math.round( (new Date() - date) / 1000);
    if (timeWent == 0) return "прямо сейчас";
    if (timeWent >=1 && timeWent < 60) return (`${timeWent} сек. назад`);
    if (timeWent >=60 && timeWent < (60*60)) return (`${Math.floor(timeWent / 60)} мин. назад`);
    else {
      let d = date;
      d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
      ].map(component => component.slice(-2));

      return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
    
};

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );