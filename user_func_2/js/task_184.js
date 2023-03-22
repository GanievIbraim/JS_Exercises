// TASK 1
let obj = {
	func1: function()  {return 1},
	func2: function()  {return 2},
	func3: function()  {return 3},
};

let sum = 0
for (func in obj) {
	sum += obj[func]()
}
console.log(sum);

// TASK 2
for (func in obj) {
	console.log(obj[func]());
}

// TASK 3
let arrNum = [10, 20, 30, 40, 50];
const calcArr = {
    sumArr: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem
        }
            return sum;
        },
    sumArrSquare: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += Math.pow(elem, 2)
        }
            return sum;
        },
    sumArrCube: function (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += Math.pow(elem, 3)
        }
            return sum;
        }
    };
console.log(`Сумма элементов массива ${arrNum} = ${ calcArr.sumArr(arrNum) }`);
console.log(`Сумма квадратов элементов массива ${arrNum} = ${ calcArr.sumArrSquare(arrNum) }`);
console.log(`Сумма кубов элементов массива ${arrNum} = ${ calcArr.sumArrCube(arrNum) }`)