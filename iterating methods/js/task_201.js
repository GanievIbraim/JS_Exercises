// TASK 1
let arr = [-2, -4, 6, 9];

let result = arr.every(elem => elem > 0);
console.log(result);

// TASK 2
result = arr.every(function(elem, index) {
	return (elem * index) < 30;
});

console.log(result);

