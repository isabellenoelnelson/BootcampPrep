// Given a deeply nested array of numbers ([3, 1, [7, [4], 6]] ) write a function called getSum that returns the sum of all the numbers in the array.

function getSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (Array.isArray(currentElement)) {
            sum += getSum(currentElement);
        } else {
            sum += currentElement;
        }
    }

    return sum;
}

console.log(getSum([3, 1, [7, [4], 6]]));