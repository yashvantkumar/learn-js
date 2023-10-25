process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function count_like_dislike(A, P) {
    // You must complete the logic for the function that is provided
    // before compiling or submitting to avoid an error.

    // Write your code here
    let totalCount = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === P[i]) {
            totalCount = totalCount + 1;
        }
    }
    return totalCount;
}

process.stdin.on('end', function () {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");

    var idx_ = 0;
    var A = input_[idx_++].trim();
    var P = input_[idx_++].trim();

    var out_ = count_like_dislike(A, P);
    process.stdout.write(out_.toString());

    process.exit();

});

// 010101
// 101101