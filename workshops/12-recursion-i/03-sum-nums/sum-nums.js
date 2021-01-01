function sumNums(num) {

    if (num === 1) {
        return 1;
    }

    return num + sumNums(num - 1);
}
























































/* function sumNums(num) {

    if (num === 1) {
        return 1;
    }
    else {
        return num + sumNums(num - 1);
    }
}

// YOUR CODE BELOW
function sumNums(num) {
    if (num === 1) {
        return 1;
    }

    let sum = num + sumNums(num - 1);

    return sum;

} */