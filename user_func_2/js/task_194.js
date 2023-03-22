// TASK 1
function each(arr, callback) {
	let result = each([1, 2, 3, 4, 5],
		function (num) {
			return num * 2;
		});
	console.log(result);
}

// TASK 2
function square(num) {
	return num ** 3;
}

let result = each([1, 2, 3, 4, 5],
	square);
console.log(result);