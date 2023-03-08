// TASK 1
let arr = [10, 20, 30, 40, 21, 32, 51];
let count = 0;

for (let elem of arr) {
	let first = String(elem)[0];
	if (first == 1 || first == 2) {
		count += elem;
	}
}
console.log(count);
