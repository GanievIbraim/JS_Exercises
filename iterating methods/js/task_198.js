// TASK 1
let arr = ['123', '456', '789'];

let result = arr.map(function(elem) {
	return [elem[0], elem[1], elem[2]];
});

console.log(result);

// TASK 2
let arr_2 = [12, 5, 33, 100, 6];

let result_2 = arr_2.map(function(elem, index) {
	return elem * index;
});

console.log(result_2);