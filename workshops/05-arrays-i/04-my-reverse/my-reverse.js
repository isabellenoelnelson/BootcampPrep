// YOUR CODE BELOW
function myReverse(array) {
    let arrayLength = array.length;
    let reverseArray = [];

    for (let i = 0; i < arrayLength; i++) {
        reverseArray.unshift(array[i]);
    }
    
    return reverseArray;
}