// TASK 1
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
	obj[key] = obj[key] ** 2;
}

console.log(obj);

// TASK 2
let obj_2 = {x: 1, y: 2, z: 3};

for (let key in obj_2) {
	obj_2[key] = obj_2[key] + 1;
}

console.log(obj_2);