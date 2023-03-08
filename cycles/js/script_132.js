// TASK 1
let str = 'перечислены символы';
let count = {};

for (let elem of str) {
	if (count[elem] === undefined) {
		count[elem] = 1;
	} else {
		count[elem]++;
	}
}

console.log(count);