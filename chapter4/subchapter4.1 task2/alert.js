let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function  isEmpty(check) {
  for (key in check) {
    return false
  }
return true
}