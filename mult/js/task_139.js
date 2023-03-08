// TASK 1
let arr = [[1, 2, 3], [4, 5], [6]];
let count = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
		count += elem;
	}
}
console.log(count);

// TASK 2
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
count = 0;

for (let subArr of arr) {
	for (let elem of subArr) {
		for (let i of elem) {
            count += i;
        }
	}
}
console.log(count);

// TASK 3
count = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            count += arr[i][j][k];
        }
    }
}
console.log(count);