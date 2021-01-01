// Write a function getLargest that takes a deeply nested array of numbers ([17, [03, 49], [43, [94], [62]]]) and returns the largest number in the array.

function getLargest(array) {
    let largestNum = 0;

    for (let i = 0; i < array.length; i++) {
        let currElem = array[i];

        if (Array.isArray(currElem)) {
            let rest = getLargest(currElem);

            if (rest > largestNum) {
                largestNum = rest;
            }
        } else {
            if (currElem > largestNum) {
                largestNum = currElem;
            } 
        }
    }

    return largestNum;
}

// console.log(getLargest([17, [03, 49], [43, [94], [62]]]));