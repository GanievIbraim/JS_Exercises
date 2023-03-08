// TASK 1, 2
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length - 1; i++) {
	console.log(arr[i + 1] + arr[i]);
}

// TASK 3, 4
console.log('------');
arr = [1, 2, 3, 4, 5];

for (let i = 2; i < arr.length; i++) {
	console.log(arr[i - 2] + arr[i] + arr[i - 1]);
}

// TASK 5
console.log('------');
arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length - 1; i++) {
	console.log(arr[i + 1] + arr[i] + arr[i - 1]);
}