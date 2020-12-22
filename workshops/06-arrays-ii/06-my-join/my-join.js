// YOUR CODE BELOW
function myJoin(array, separator) {
    let joinedString = '';

    if (separator === undefined) {
        separator = ','
    }

    for (let i = 0; i < array.length - 1; i++) {
        const currentElem = array[i];

        if (currentElem === undefined || currentElem === null) {
            joinedString += separator;
        }
        else {
            joinedString += `${currentElem}${separator}`
        }
    }
    if (array.length) {
    joinedString += array[array.length - 1];
    }

    return joinedString;
}