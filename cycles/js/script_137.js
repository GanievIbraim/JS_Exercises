// TASK 1
let num = 6
let factorial = 1;

for (let i = 1; i <= num; i++) {
	factorial *= i;
}
console.log(factorial);

// TASK 2
let numbers = [1, 34, 1, 23, 5];

for (let i = 1; i <= num; i++) {
	document.write(i + '<br>')
}

// TASK 3
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for(elem in obj){
	obj[elem] = obj[elem] * 1.1;
}
console.log(obj);

// TASK 4
let obj_2 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keys = [];
let value = [];

for(elem in obj_2){
	keys.push(elem);
	value.push(obj_2[elem]);
}
console.log(keys);
console.log(value);

// TASK 5
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj_3 = {};
let counter = 1;
for(elem of arr){
	obj_3[elem] = counter;
}
console.log(obj_3);