for (let i = 2; i <= 10; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        // console.log("j", i, j)
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag === 0) {
        // console.log(i);
    }
}

function primeFactorsTo(max) {
    var store = [], i, j, primes = [];
    const upperLimit = max;
    for (i = 2; i <= upperLimit; ++i) {
        // console.log("store", i, store[i])
        if (!store[i]) {
            primes.push(i);
            for (j = i * i; j <= max; j = j + i) {
                // console.log("j", j)
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(100));

var eratosthenes = function (n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.ceil(Math.sqrt(n)), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if (array[i]) {
            output.push(i);
        }
    }

    return output;
};

// console.log(eratosthenes(49));

// const inArr = [3, 1, 4, 4, 4, 5, 2, 6, 1, 2];
const inArr = [1, 1, 1, 2, 2, 2, 3, 3, 3]

const findOcc = (inArr = [], k) => {
    const valueToCount = {};
    for (let i = 0; i < inArr.length; i++) {
        if (valueToCount[inArr[i]]) {
            valueToCount[inArr[i]] = parseInt(valueToCount[inArr[i]]) + 1
        } else {
            valueToCount[inArr[i]] = 1
        }
    }
    // console.log("valueToCount", valueToCount);
    // console.log("ob", Object.va)
    console.log("sort", Object.keys(valueToCount).sort((a, b) => valueToCount[b] - valueToCount[a]))
    const sortOne = Object.keys(valueToCount).sort((a, b) => valueToCount[b] - valueToCount[a])
    const final = []
    for (let i = 0; i < k; i++) {
        final.push(parseInt(sortOne[i]))
    }

    // if (valueToCount === )
    console.log("final", final)
};

// findOcc(inArr, 2)

function topKFrequentNumbers(nums, k) {
    // Step 1: Count the frequency of each number
    const frequencyMap = new Map();

    for (const num of nums) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }

    // Step 2: Create an array of unique numbers sorted by frequency
    const uniqueNumbers = Array.from(new Set(nums));
    uniqueNumbers.sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);

        if (freqA !== freqB) {
            return freqB - freqA; // Sort by frequency in descending order
        } else {
            return a - b; // If tied, sort by number in ascending order
        }
    });

    // Step 3: Return the top k numbers with ties
    return uniqueNumbers.slice(0, k);
}

// Example usage:
const nums = [1, 1, 1, 2, 2, 3, 3, 3, 2];
const k = 2;
const topKNumbers = topKFrequentNumbers(nums, k);
//   console.log(topKNumbers); // Output: [1, 2]

