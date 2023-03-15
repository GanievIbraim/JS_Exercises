// TASK 1
let str = 'js';
console.log(str.toUpperCase());

// TASK 2
let str2 = 'JS';
console.log(str2.toLowerCase());

// TASK 3
let str3 = 'я учу javascript!';
let a1 = str3.substr(2, 3);
let a2 = str3.substr(6, 10);
console.log(a1, a2);

let b1 = str3.substring(2, 5);
let b2 = str3.substring(6, 16);
console.log(b1, b2);

let c1 = str3.slice(2, 5);
let c2 = str3.slice(6, 16);
console.log(c1, c2);

// TASK 4
let str4 = 'abcde';
console.log(str4.indexOf('c'));

// TASK 5
let str5 = 'abcde';
if (str5.indexOf('a') >= 0) {
        console.log('true')
} else {
        console.log('false')
};

// TASK 6
let str6 = 'bcade';
if (str6.indexOf('a') == 0) {
        console.log('true')
} else {
        console.log('false')
};

// TASK 7
let str9 = 'http://bcdea.html';
if (str9.lastIndexOf('.html') == str9.length - 5) {
        console.log('true')
} else {
        console.log('false')
};

// TASK 8
let str10 = 'http://abcd.html';
if (str10.startsWith('http://')) {
        console.log('true')
} else {
        console.log('false')
};

// TASK 9
let str11 = 'http://abcd.html';
if (str11.endsWith('.html')) {
        console.log('true')
} else {
        console.log('false')
};

// TASK 10
let str12 = '1-2-3-4-5';
let newArr = str12.split('-');
console.log(newArr);

// TASK 11
let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'))