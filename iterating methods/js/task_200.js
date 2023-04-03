// TASK 1
let arr = [1, 2, [3, 4], 5, [6, 7]];

let result = arr.filter(function(elem) {
	if (typeof elem != 'object') {
		return true;
	} else {
		return false;
	}
});

console.log(result);

// TASK 1
arr = [-1, 2, -3, -4, 5, 6, -7];

let filtered = arr.filter(elem => elem < 0);
console.log( filtered.length ); 