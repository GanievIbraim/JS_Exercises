// TASK 1
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

// TASK 2
let num = 4;
flag = false;

for (let i = 2; i < num; i++){
	if (num % i == 0){
		flag = true;
		break;
	}
}


if (flag === false) {
	console.log('ПРОСТОЕ ЧИСЛО');
} else {
	console.log('---');
}