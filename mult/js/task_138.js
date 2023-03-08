// TASK 1
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
]

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

// TASK 2
let count = 0;
let arr_2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (elem of arr_2) {
    count += elem[0] + elem[1];
}
console.log(count);

// TASK 3
count = 0;
let arr_3 = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];

for (elem of arr_3) {
    for (i of elem) {
        count += i[0] + i[1];
    }
}
console.log(count);

// TASK 4
count = 0;
let arr_4 = [
    [1, 2, 3,
        [4, 5,
            [6, 7]
        ]
    ],
    [8,
        [9, 10]
    ]
];
count = arr_4[0][0] + arr_4[0][1] + arr_4[0][2] + arr_4[0][3][0] + arr_4[0][3][1] + arr_4[0][3][2][0]  + arr_4[0][3][2][1] + arr_4[1][0] + arr_4[1][1][0] + arr_4[1][1][1];


console.log(count);