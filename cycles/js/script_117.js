// TASK 1
let res = 0;

for (let i = 2; i <= 100; i++) {
	if (i % 2 == 0) {
		res += i;
	}
}
console.log(res);

// TASK 2
res = 0;

for (let i = 1; i <= 99; i++) {
	if (i % 2 == 1) {
		res += i;
	}
}
console.log(res);

// TASK 1
res = 1;

for (let i = 1; i <= 20; i++) {
	res *= i;
}
console.log(res);