function add(x) {
    return function (y) {
        console.log(y)
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee ? arguments.callee : x;
        } else {
            return x;
        }
    };
}
const Sum = a => b => b ? Sum(a + b) : a;
// console.log("add", Sum(1)(2)(3)())

// function makeApiCall() {
//     let res = null;

//     fetchApi.then((res) => {
//         res = res;
//     }).catch((err) => err);

//     setTimeout(() => {
//         if (res) {
//             return res;
//         } else {
//             return null;
//         }
//     }, 10000);
// };

var removeElement = function (nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            console.log("n", nums[count++])
            nums[count++] = nums[i];
        }
    }
    return count;
};

// console.log("removeElement", removeElement([1, 2, 3, 3], 3))

var containsDuplicate = function (nums) {

    let duplicateEntries = new Set();
    console.log("duplicateEntries", duplicateEntries.size)
    for (let i of nums) {
        console.log("duplicateEntries", duplicateEntries.size, i)
        if (duplicateEntries.has(i)) {
            return true
        } else {
            duplicateEntries.add(i)
        }
    }

    return false;
};

console.log("nums", containsDuplicate([1, 2, 3, 1]))
