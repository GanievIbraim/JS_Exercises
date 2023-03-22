
// TASK 10
function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num); // 1
}

test(1);