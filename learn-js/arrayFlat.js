let arr = ["5", "3", ["9", 2, 1, ["4", [6, 7, 8]]]];

let arr2 = [];
function flat(arr) {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            flat(element);
        } else {
            arr2.push(parseInt(element));
        }
    });
}

flat(arr);

// console.log("arr2", arr2);

let arr3 = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
        arr = [
            ...arr,
            ...arr[i]
        ]
    } else {
        arr3.push(parseInt(arr[i]));
    }
}

// console.log("arr3", arr3);

const num = 6;

const findFactorial = (num) => {
    if (num > 1) {
        console.log("num", num)
        return num * findFactorial(num - 1)
    } else {
        return 1;
    }
};

// console.log("findFactorial", findFactorial(num));

const findLargestNumber = (arr = []) => {
    // const largestNum = arr.reduce((acc, curr) => {
    //     return Math.max(acc, curr);
    // }, 0);

    const sorted = arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0
        }
    });
    console.log("sorted", sorted)
    return sorted[sorted.length - 1];
};

// console.log("findLargestNumber", findLargestNumber([10, 2, 3, 4]))

function zigZag(arr, n) {
    // sort the by using the sort function
    arr.sort();
    console.log("arr", arr);
    //traverse the array from 1 to n-1
    for (let i = 1; i <= n - 2; i = i + 2) {
        // swap the current element with next element
        console.log("i", i, arr[i], arr[i + 1])
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log("arr", arr)
}

function zigZag1(arr, n) {
    let flag = true;

    for (let i = 0; i < n; i++) {
        if (flag) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
        flag = !flag;
    }
    return arr;
};

let arr1 = [4, 3, 7, 8, 6, 2, 1];
let n = arr1.length;
const te = zigZag1(arr1, n);
console.log("te", te);

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
};

const te1 = bubbleSort(arr1);
console.log("te1", te1);
