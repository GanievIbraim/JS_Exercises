// TASK 1
let num = 77;

if (num >= 10 && num <= 99) {
	new_num = String(num)
	if ((Number(new_num[0]) + Number(new_num[1])) <= 9) {
		console.log('Cумма цифр однозначна');
	} else {
		console.log('Cумма цифр двухзначна');
	}
} else {
	console.log('Неверное значение');
}
