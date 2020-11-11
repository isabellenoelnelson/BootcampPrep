// YOUR CODE BELOW
function mySlice(originalArray, startIdx = 0, endIdx = originalArray.length) {
    let finalArray = [];

    if (startIdx < 0) {
        startIdx = originalArray.length + startIdx;
    }

    if (endIdx < 0) {
        endIdx = originalArray.length + endIdx;
    }

    for (let i = startIdx; i < endIdx; i++) {
        let currentElement = originalArray[i];

        finalArray.push(currentElement);
    }

    return finalArray;
}