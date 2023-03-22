// TASK 1
let i = 0;
function calc(num) {
    for (;; i++) {
        num = num / 2;
        if (num <= 10) {
            return i;
        } 
    }
}
console.log(calc(100));