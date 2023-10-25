'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let len = n;

    while (n > 0) {
        let curr = "";

        for (let i = 0; i < len; i++) {
            if (i < n - 1) {
                curr = curr + " ";
            } else {
                curr = curr + "#";
            }
        }
        console.log(curr.toString());
        n--;
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
