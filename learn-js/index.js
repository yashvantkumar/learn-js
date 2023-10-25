// console.log("hello")

// const car = (color = "", brand = "", length = "", type = "") => {
//     console.log("args", color)
// };

// car("red", "ford", 23, "sedan");

// const hoistTest = () => {
//     console.log(a);
//     let a;
//     a = 20;
// };

// hoistTest();

// const test = {
//     prop: 42,
//     func: function () {
//         return this;
//     },
// };

// console.log(test.func());


// const animal = (animalName) => {
//     return animalName;
// };

// animal("tiger"); // pass by value

// const nameOfAnimal = "Dog"; // value of this changes dynamically

// animal(nameOfAnimal); // pass by reference

// let animal1;
// animal1 = "Dog";
// animal1 = {
//     nameOfAnimal: "test"
// }
// animal1 = 11;
// animal1 = () => {
//     return "hello"
// };

// console.log("animal1", typeof animal1);

// const test1Fn = () => {
//     console.log("test1", test1)
// };
// let test1;
// test1Fn();
// test1 = 10;
// test1Fn();

// let a = 10;
// const b = 20;
// a = 30;

// const testObj = {
//     nameObj: "test"
// }
// console.log("testObj", testObj)

// testObj.age = 10;
// testObj = {};

// console.log("testObj", testObj)
// const test = () => {
//     let c = 30;

//    function test2() {
//         console.log("c", c)
//     }
//     return test2();
// };
// test();
// console.log("here")
// console.log("a, b, c", a, b, c);

// const animalObj1 = {
//     nameOfAnimal: "Cat",
//     age: 10,
//     color: "black"
// };

// const nameOfAnimal = animalObj1.nameOfAnimal;

// const { nameOfAnimal: animalName = "Dog" } = animalObj1;
// console.log("animalName", animalName)

// const array1 = [1, 2, 3];

// const [index1, ...index2] = array1;

// console.log("index1", index1, index2)

a = [1, 2, 3, 4, 5, 6];
b = 9;

const twoSum = function (numArray = [], target = 0) {
    try {
        let mp = new Map();
        console.log("mp", mp)

        for (let i = 0; i < numArray.length; i++) {
            let diff = target - numArray[i]
            if (mp.has(diff)) {
                return [i, mp.get(diff)]
            }
            mp.set(numArray[i], i);
            console.log("mp", mp)
        }
    } catch (error) {
        console.log("error", error)
    }
};

// console.log(twoSum([1, 2, 3, 4, 5,6], 9));

// var canMakeArithmeticProgression = function (arr) {
//     const sortedArr = arr.sort(function (a, b) {
//         if (a === Infinity)
//             return 1;
//         else if (isNaN(a))
//             return -1;
//         else
//             return a - b;
//     });
//     console.log("sortedArr", sortedArr)
//     let diff = sortedArr[1] - sortedArr[0];
//     for (let i = 1; i < sortedArr.length; i++) {
//         if (sortedArr[i] - sortedArr[i - 1] != diff) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16]));

// function canMakeArithmeticProgression(arr = []) {
//     if (arr.length < 3) return true;

//     arr.sort((a, b) => a - b);
//     for (let i = 2; i < arr.length; i++)
//         if (arr[i] - arr[i - 1] !== arr[i - 1] - arr[i - 2]) return false;
//     return true;
// };

// var nextGreatestLetter = function(letters, target) {
//     for (let i=0; i<letters.lengh; i++) {
//         if (letters[i] > target) {
//             return letters[i]
//         }
//     }
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var getMinimumDifference = function(root) {
//     const DFS = (node, lo, hi) => {
//         if (!node) return hi - lo;
//         const left = DFS(node.left, lo, node.val);
//         const right = DFS(node.right, node.val, hi);
//         return Math.min(left, right);
//     };
//     return DFS(root, -Infinity, Infinity);
// };

// console.log("Out", getMinimumDifference([4, 2, 6, 1, 3]));

// function birthdayCakeCandles(candles) {
//     const sortedArr = candles.sort((a,b)=>a-b);
//     let count = 0;
//     let tallestCandle = sortedArr[sortedArr.length-1];
//     console.log("sortedArr", tallestCandle)
//     for (let i=sortedArr.length; i>0; i--) {
//         console.log("i", i)
//         if (tallestCandle === sortedArr[i]) {
//             count++
//         };
//     }
//     console.log("count", count)
//     return count;
// }

// birthdayCakeCandles([5, 2, 3,10, 22, 22, 11, 6])

function countSwaps(a) {
    // Write your code here
    let inputArr = [...a];
    let counter = 0;
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                counter++;
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log("Array is sorted in", counter, "swaps.", inputArr);
    console.log("First Element:", inputArr[0])
    console.log("Last Element:", inputArr[inputArr.length - 1])
}
// countSwaps([10, 2, 30, 444, 53, 5, 7])

const sumTarget = (numbers, target) => {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        curSum = numbers[left] + numbers[right];

        if (curSum > target) {
            right -= 1;
        } else if (curSum < target) {
            left += 1;
        } else {
            return [left + 1, right + 1]
        }
    }

    return [];
};

// const test = sumTarget([1, 2, 7, 11, 15], 9);
// console.log("test", test);

function find3Numbers(A, arr_size, sum) {
    // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++) {

        // Find pair in subarray A[i+1..n-1]
        // with sum equal to sum - A[i]
        let s = new Set();
        let curr_sum = sum - A[i];
        for (let j = i + 1; j < arr_size; j++) {
            if (s.has(curr_sum - A[j])) {
                console.log(
                    "Triplet is " + A[i] + ", " + A[j] + ", " +
                    (curr_sum - A[j]) + "<br>"
                );

                return true;
            }
            s.add(A[j]);
        }
    }

    // If we reach here, then no triplet was found
    return false;
}

let A = [1, 4, 45, 6, 10, 8];

let sum = 22;
let arr_size = A.length;
// console.log(find3Numbers(A, arr_size, sum));

// select * from main_table order by salary desc limit 3
// select min(salary) from () as x
// select * from main_table as t on t.id = main_table.manager_id
// select * from 

let factNo = 6;
let final = 1;

for (let i = 1; i <= factNo; i++) {
    final = final * i
}
// console.log("final", final)

const array = [1,2,3,4,5,6,7]
reverse = (array) => array.map(array.pop, [...array]);
// console.log("reverse", reverse(array))
reverse1 = array.reduceRight((acc, current) => {
    acc.push(current);
    return acc;
}, []);
reverse2 = array.map((each, index, arr) => arr[arr.length - 1 - index]);
console.log("reverse2", reverse2)

// console.log("reverse1", reverse1);

// const opposite = f => ((...args) => !f(...args));

// const predicate = e => e > 3;
// const arr = [1, 2, 3, 4, 5];

// console.log(arr.filter(predicate));
// console.log(arr.filter(opposite(predicate)));