// TASK 1
let arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push(i);
}

// TASK 2
let arr_2 = [];

for (let i = 1; i <= 10; i++) {
	arr_2.push('X');
}

// TASK 3
let arr_3 = [1, -32, 4, -2, 6];
let arr_new = [];
for (let elem of arr_3) {
	if(elem > 0){
		arr_new.push(elem);
	}
}

console.log(arr);
console.log(arr_2);
console.log(arr_new);