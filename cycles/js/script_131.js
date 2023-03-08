// TASK 1
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter_3 = 0;
let counter_2 = 0;

for (let elem of arr) {
	if (elem == 3) {
		counter_3++;
	}
	else if (elem == 2){
		counter_2++;
	}
}

console.log('Троек в массиве ' + counter_3);
console.log('Двое в массиве ' + counter_2);
