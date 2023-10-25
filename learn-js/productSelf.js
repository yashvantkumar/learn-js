const productSelf = (arr) => {
    const result = Array(arr.length).fill(1);

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < arr.length; i++) {
        result[i] = prefix;
        prefix = arr[i] * prefix;
    }

    for (let i = arr.length - 1; i > -1; i--) {
        result[i] = result[i] * postfix;
        postfix = postfix * arr[i];
    }

    return result;
};

console.log(productSelf([1, 2, 3, 4]));
