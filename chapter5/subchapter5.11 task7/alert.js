function getSecondsToTomorrow() {   
  return ( 24*60*60 - Math.round((new Date() - new Date().setHours(0, 0, 0, 0)) / 1000) );

};

alert ( getSecondsToTomorrow() );