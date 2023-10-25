class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    reverseBetween(head, left, right) {
        const temp = new ListNode(-1);
        let prev = temp;
        temp.next = head;

        for (let i = 0; i < left - 1; i++) {
            prev = prev.next;
        }

        let cur = prev.next;

        for (let i = 0; i < right - left; i++) {
            let ptr = prev.next;
            prev.next = cur.next;
            cur.next = cur.next.next;
            prev.next.next = ptr;
        }

        return temp.next;
    }
}

const reverse = new Solution();
// console.log("reverse", reverse.reverseBetween([1, 2, 3, 4, 5], 2, 4));
let abc = []
const fib = (n, a = 0, b = 1) => {
    abc.push(a)
    // console.log("a", a, abc)
    const ba = n === 0 ? a : fib(n - 1, b, a + b);
    return ba;
}

// console.log("fib", fib(15), abc);

var trap = function(height) {
    let left = 0, right = height.length - 1;
	let maxLeft = 0, maxRight = 0;
	let total = 0;
	
	while (left < right) {
        console.log("height", height[left], height[right])
		if (height[left] <= height[right]) {
			if (height[left] < maxLeft)
				total += maxLeft - height[left];
			else
				maxLeft = height[left];
			
			left++;
		} else {
			if (height[right] < maxRight)
				total += maxRight - height[right];
			else
				maxRight = height[right];
			
			right--;
		}
	}
	
	return total;
};

console.log("trap", trap([0,1,0,2,1,0,1,3,2,1,2,1]))