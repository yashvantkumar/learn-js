var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.round((left + right) / 2);

        if (target === nums[mid]) return mid;

        if (nums[left] <= nums[mid]) {
            if (target < nums[left] || target > nums[mid]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        else {
            if (target > nums[right] || target < nums[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
    }
    return -1;
};

console.log("nums", search([1, 3], 1));
