// TASK 1
function func1() {
	return function() {
		return 1;
	};
}

function func2() {
	return function() {
		return 2;
	};
}

console.log(func1()() + func2()());

// TASK 2
function func() {
	return function() {
		return function() {
			return function() {
				return function() {
					return '!';
				};
			};
		};
	};
}

console.log(func()()()()());

// TASK 3
function func3(num1) {
	return function(num2) {
		return function(num3) {
			return num1 + num2 + num3;
		};
	};
}
console.log(func3(2)(3)(4))

// TASK 3
let arr = []
function func4(num1) {
	arr.push(num1);
	return function(num2) {
		arr.push(num2);
		return function(num3) {
			arr.push(num3);
			return function(num4) {
				arr.push(num4);
				return function() {
					return arr;
				};
			};
		};
	};
}
console.log(func4(2)(3)(4)(5)())