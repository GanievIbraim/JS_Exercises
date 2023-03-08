// TASK 1
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// TASK 2
let i1 = 0;
while (i1 <= 10) {
    console.log(i1);
	i1++;
}

// TASK 3
let res = 0;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);

// TASK 4
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
	sum += elem;
}
console.log(sum);

// TASK 5
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; 
	i++) { 
	arr1[i] = arr1[i] ** 2;
}
console.log(arr1);

// TASK 6
let arr2 = [];

for (let i = 1; i <= 5; i++) {
	arr2.push(i);
}
console.log(arr2);
