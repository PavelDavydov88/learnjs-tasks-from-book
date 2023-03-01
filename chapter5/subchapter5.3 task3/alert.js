function truncate(str, maxlength) {  
  if (str.length > maxlength)  return (str.slice(0, maxlength-1) + "…")
  else return str;
}

alert( truncate("Here is what I would like to say on this topic:", 20) );

alert( truncate("Hi for everybody", 20) );
