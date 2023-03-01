function topSalary(salaries) {
  let topSalary = 0;
  let topName = null;
  for (let employee of Object.entries(salaries) ) {
    let [name, salary] = employee;
    if (topSalary < +salary) {
      topName = name;
      topSalary = salary;
    }
  }
  return topName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries));