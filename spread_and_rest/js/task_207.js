// TASK 1
function func(...nums) {
	let sum = 0;
	let count = 0;

	for (let num of nums) {
		sum += num;
		count ++;
	}
	
	return sum / count;
}

let result = func(12, 24, 391, 23, 664, 72, 33,60);
console.log(result);