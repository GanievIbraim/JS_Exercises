// TASK 1
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i <= 4; i++) {
	obj[arr1[i]] = arr2[i];
}

console.log(obj);

// TASK 2
let obj_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let new_obj = {};

for (let elem in obj_2) {
	if (obj_2[elem] % 2 == 0){
		new_obj[elem] = obj_2[elem];
	}
}

console.log(new_obj);

// TASK 3
let obj_3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let new_obj_2 = {};

for (let elem in obj_2) {
	new_obj_2[obj_2[elem]] = elem;
}

console.log(new_obj_2);
