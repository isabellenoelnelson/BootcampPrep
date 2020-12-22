// YOUR CODE BELOW
function reverseArray(anArr) {
    
    if (anArr.length === 1) {
        
        return anArr.slice();
    }

    let newArr = [];
    let lastElement = anArr[anArr.length - 1];
    newArr.push(lastElement);

    let reversedRemainingElements = reverseArray(anArr.slice(0, -1));

    newArr = newArr.concat(reversedRemainingElements);

    return newArr;
}