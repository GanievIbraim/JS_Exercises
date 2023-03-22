// TASK 1
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(2));
console.log(res)

// TASK 2
function sqrt1(num4) {
	return Math.sqrt1(num4);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res1 = sum(sqrt1(2), sqrt1(3), sqrt1(4));
console.log(res1)

// TASK 3
function round2(num) {
    return num.toFixed(3);
}
let res2 = round2(sum1(sqrt1(2), sqrt1(3), sqrt1(4)));
console.log(res2);