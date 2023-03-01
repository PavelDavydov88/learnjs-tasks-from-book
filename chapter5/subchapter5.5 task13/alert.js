function groupById(users) {
  let finishObj = {};
  for (let str of users) {
    finishObj[str.id] = str;    
  }
  return finishObj;

}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

alert(usersById.pete.name);