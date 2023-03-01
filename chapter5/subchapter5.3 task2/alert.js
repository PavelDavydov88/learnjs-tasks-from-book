function checkSpam(str) {  
  if ( str.toUpperCase().includes("VIAGRA") | str.toUpperCase().includes("XXX") )  return true 
  else return false;
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));