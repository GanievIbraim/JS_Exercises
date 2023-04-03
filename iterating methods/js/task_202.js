// TASK 1
let arr = [-2, -4, 5, -9];

let result = arr.some(elem => elem > 0);
console.log(result);

// TASK 2
result = arr.some(function(elem, index) {
	return (elem * index) > 30;
});

console.log(result);
