// TASK 1
let arr1 = [1, 2, 3, 4, 5]

function sumArr(arr) {
    let res = 0;
    for (let elem of arr) {
        res += elem;
    };
    return res;
};
console.log(sumArr(arr1));

// TASK 2
let num2 = 12;
let newArr2 = [];

function getDivider(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            newArr2.push(i)
        } else {
            continue;
        };
    };
    return newArr2;
};
console.log(getDivider(num2));

// TASK 3
let str3 = 'Hello world!';
let newArr3 = [];

function getWordArr(str) {
    newArr3 = str.split('');
    return newArr3;
};
console.log(getWordArr(str3));

// TASK 4
let str5 = 'hello world!';
let newStr5 = '';

function upperStr(str) {
    newStr5 = str.slice(0, 1).toUpperCase() + str.slice(1);
    return newStr5;
};
console.log(upperStr(str5));

// TASK 5
let str6 = 'hello world!';

function newStrUpper(str) {
    let words = str.split(' ');
    for (let i = 0; i <= words.length - 1; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    };
    let result = words.join(' ');
    return result;
};
console.log(newStrUpper(str6));

// TASK 6
let num = 10;
let newArr7 = [];

function getArr(number) {
    for (let i = 1; i <= number; i++) {
        newArr7.push(i);
    };
    return newArr7;
};
console.log(getArr(num))

// TASK 7
let arr8 = [1, 2, 3, 4, 5];
let randomElem;

function getRandomElem(arr) {
    randomElem = Math.floor(Math.random() * arr.length);
    let res = arr[randomElem];
    return res;
};
console.log(getRandomElem(arr8))

// TASK 8
let number1 = 12;
let number2 = 10;

function sumDividers(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        } else {
            continue;
        };
    };
    return sum;
};

function checkFriendliness(num1, num2) {
    if (sumDividers(num1) == sumDividers(num2) || sumDividers(num2) == sumDividers(num1)) {
        return true;
    } else {
        return false;
    };
};
if (checkFriendliness(number1, number2)) {
    console.log(`Числа ${number1} и ${number2} дружественные`);
} else {
    console.log(`Числа ${number1} и ${number2} не дружественные`);
};