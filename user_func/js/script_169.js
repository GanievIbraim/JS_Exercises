// TASK 1
let arr1 = [1, 2, 3, 4];
function calcArr(arr) {
let res = 0;
for (let elem of arr) {
    res += elem;
};
res = res / arr.length
    return res;
};
console.log(calcArr(arr1))

// TASK 2
let arr2 = [1, 2, 3, 4];
let arr3 = [5, 6, 7, 8];
function sumElem(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem
    };
    return sum;
};
function calcArr__1(arr1, arr2) {
    let res1 = sumElem(arr1)
    let res2 = sumElem(arr2)
    return res1 / res2;
};
console.log(calcArr__1(arr2, arr3));

// TASK 3
let arr6 = [1, 2, 3, 4, 5, 6]
function calcArr_2(arr) {
    let res = 1;
    for (let elem of arr) {
        res *= elem;
    }
    return res;
};
console.log(calcArr_2(arr6));