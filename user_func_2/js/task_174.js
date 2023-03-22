// TASK 1
let num = 1;

function func() {
	num = 2;
}
func();

console.log(num); // 2

//  TASK 2
num = 1;

function func() {
	let num = 2;
}
func();

console.log(num); // 1