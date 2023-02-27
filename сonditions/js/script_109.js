// TASK 1
let month = 2;
if (month == 12 || month >= 1 && month <= 2){
    alert('TASK 1. Время года зима');
} else if (month >= 3 && month <= 5){
    alert('TASK 1. Время года весна');
} else if (month >= 6 && month <= 8){
    alert('TASK 1. Время года лето');
} else if (month >= 9 && month <= 11){
    alert('TASK 1. Время года осень');
}

// TASK 2
let str = 'вabcde';
if (str[0] == 'a'){
    alert('TASK 2. Да');
} else {
    alert('TASK 2. Нет');
}

// TASK 3
let num = 12345;
let first = String(num)[0];
if (first == '1' || first == '2' || first == '3'){
    alert('TASK 3. Да');
} else {
    alert('TASK 3. Нет');
}

// TASK 4
let num2 = 674;
let str2 = String(num2);
alert('TASK 4. ' + (+str2[0] + (+str2[1]) + (+str2[2])));

// TASK 5
let num3 = 123033;
num3 = String(num3);

let sum1 = +num3[0] + (+num3[1]) + (+num3[2]);
let sum2 = +num3[3] + (+num3[4]) + (+num3[5]);

if (sum1 == sum2) {
	alert('TASK 5. Да');
} else {
	alert('TASK 5. Нет');
}