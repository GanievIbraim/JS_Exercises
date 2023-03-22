// TASK 1
test(
	function() {return 1;},
	function() {return 2;},
	function() {return 3;}
);

function test(func1, func2, func3) {
	console.log( func1() + func2() + func3); 
}

// TASK 2
function func1() {
	return 1;
}
function func2() {
	return 2;
}
function func3() {
	return 3;
}
test(func1, func2, func3); 
function test(func1, func2, func3) {
	console.log( func1() + func2() + func3() );
}

// TASK 4
let func1 = function() {
	return 1;
}
let  func2 = function() {
	return 2;
}
let func3 = function() {
	return 3;
}
test(func1, func2, func3); 
function test(func1, func2, func3) {
	console.log( func1() + func2() + func3() );
}

// TASK 5
test(function(num) {
	return num ** 3;
});

function func() {
	console.log(func(3));
}

// TASK 6
let func = function(){
    console.log(func(3));
}

// TASK 9
function test(num, func1, func2) {
	return func1(num) + func2(num);
}
test(2, function(num) {
	return num * num; 
}, function(num){
    return num * num * num;
});