// TASK 1
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr);

// TASK 2
arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 5; j++) {
		arr[i].push('x');
	}
}

console.log(arr);

// TASK 3
arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 2; j++) {
		arr[i][j] = [];
		for (let k = 0; k < 5; k++) {
			arr[i][j] .push(k+1);
		}
	}
}

console.log(arr);
