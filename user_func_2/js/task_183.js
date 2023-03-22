// TASK 1, 2
let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];

console.log(arr[2]());

// TASK 3
console.log(arr[0]() + arr[1]() + arr[2]());

// TASK 4
let sum = 0
for (let func of arr) {
	sum += func();
}
console.log(sum);