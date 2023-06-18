function func1(employee) {
	let [name, surname, department, position, salary] = employee;
  }
func(['John', 'Smit', 'development', 'programmer', 2000]);

function func2(employee) {
  let [name, surname, ...info] = employee;
  let [position, salary] = info;
  console.log('Name:', name);
  console.log('Surname:', surname);
  console.log('Position:', position);
  console.log('Salary:', salary);
}

func(['John', 'Smit', 'development', 'programmer', 2000]);
