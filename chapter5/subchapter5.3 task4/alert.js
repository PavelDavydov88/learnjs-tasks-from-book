function extractCurrencyValue(str) {  
  if (str.length >= 2)  return +str.slice(1)
  else return +str;
}

alert( extractCurrencyValue("$120") );
alert( extractCurrencyValue("$1.20") );
alert( extractCurrencyValue("$") );
alert( extractCurrencyValue("5") );