// YOUR CODE BELOW
function sumDigits(num) {
    let numString = String(num);

    if (numString.length === 1) {
        return num;
    }

    let sum = 0;

    sum += Number(numString[0]);

    sum += sumDigits(Number(numString.slice(1)));

    return sum;
}