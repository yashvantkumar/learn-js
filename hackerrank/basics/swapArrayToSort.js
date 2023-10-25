'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let sortedArray = arr
    let numberPositions = {}
    let numberOfSwaps = 0

    arr.forEach((n, i) => {
        numberPositions[n] = i
    })

    arr.forEach((_, i) => {
        if (sortedArray[i] != i + 1) {
            let temp = sortedArray[i]
            sortedArray[i] = sortedArray[numberPositions[i + 1]]
            sortedArray[numberPositions[i + 1]] = temp
            numberPositions[temp] = numberPositions[i + 1]
            numberPositions[i + 1] = i
            numberOfSwaps += 1
        }
    })
    return numberOfSwaps
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
