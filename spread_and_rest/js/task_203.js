// TASK 1
let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

console.log(func(...arr));

// TASK 2
// Ответ: 260

// TASK 3
arr = [1, 2, 3, 4, 5]
let min = Math.min(...arr);
console.log(min);