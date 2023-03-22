// TASK 1
function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) ); // в консоль выведется число три, т.к. после return код дальне не выполнится

// TASK 2
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) ); // выведется 100, потому что число больше 0
console.log( func(-5) ); // выведется 5, потому что число меньше 0

// TASK 3
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) ); // выведется 100, потому что число не удовлетворяют условию
console.log( func(-5) ); // // выведется 5, потому что число меньше 0 и дальше после return код не выполняется