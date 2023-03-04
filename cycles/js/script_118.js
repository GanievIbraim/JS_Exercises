// TASK 1
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
	res += elem;
}

console.log(res);

// TASK 2
arr = [2, 5, 9, 3, 1, 4];
res = 0;

for (let elem of arr) {
	if (elem % 2 == 0){
		res += elem;
	}
	
}

console.log(res);

// TASK 3
arr = [2, 5, 9, 3, 1, 4];
res = 0;

for (let elem of arr) {
	res += elem**2;	
}

console.log(res);

// TASK 4
arr = [2, 5, 9, 3, 1, 4];
res = 1;

for (let elem of arr) {
	res *= elem;	
}

console.log(res);