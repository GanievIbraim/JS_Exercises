// TASK 1
function func(localNum) {
	console.log(localNum);
}
func(1);

// TASK 2
function func1(localNum1) {
	console.log(localNum1);
}
let num1 = 1;
func(num1);

// TASK 3
function func2(localNum2) {
	console.log(localNum2);
}
let num2 = 1;
func2(num2);
num2 = 2;

// TASK 4
let num3 = 1;
function func3(localNum3) {
	console.log(localNum3);
}
num3 = 2;
func3(num3);

// TASK 5
function func4(localNum4) {
	localNum4 = 2;
}
let num4 = 1;
func4(num4);
console.log(num4);