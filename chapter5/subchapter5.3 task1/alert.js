function ucFirst(str) {
  if (!str) return str;
  let str0 = str[0].toUpperCase();  
  let str1 = str.slice(1);  
  let str2 = str0 + str1;  
  return (str2);
}

alert(ucFirst("monday"));