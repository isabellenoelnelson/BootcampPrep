function sumDigits(num) {
    let numString = String(num);
    let sum = 0;

    if(numString.length === 1) {
        return Number(numString);
    }

    let currentNum = Number(numString[0]);
    let rest = Number(numString.slice(1));

    sum += currentNum;
    sum += sumDigits(rest);

    return sum;
}







/* function sumDigits(num) {
    let numString = String(num);
    let sum = 0;

    if (numString.length === 1) {
        return Number(numString);
    }

    let currentChar = Number(numString[0]);

    sum += currentChar;

    let remaining = Number(numString.slice(1));

    sum += sumDigits(remaining);

    return sum;
} */















































// YOUR CODE BELOW
/* function sumDigits(num) {
    let numString = String(num);

    if (numString.length === 1) {
        return num;
    }

    let sum = 0;

    sum += Number(numString[0]);

    sum += sumDigits(Number(numString.slice(1)));

    return sum;
} */