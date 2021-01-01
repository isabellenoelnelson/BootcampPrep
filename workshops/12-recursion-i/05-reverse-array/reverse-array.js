function reverseArray(array) {
    let newArray = [];
    let currentEntry = array[array.length - 1];
    let rest = array.slice(0, -1);

    if (array.length === 1) {
        return array.slice();
    }
    else {
        newArray.push(currentEntry);
        newArray = newArray.concat(reverseArray(rest));
    }

    return newArray;
}



















































/* function reverseArray(array) {
    let newArray = [];

    if (array.length === 1) {
        return array.slice();
    }

    let lastElement = array[array.length - 1];

    newArray.push(lastElement);

    let reverseRemainingElements = reverseArray(array.slice(0, -1));

    newArray = newArray.concat(reverseRemainingElements);

    return newArray;
}



// YOUR CODE BELOW
/* function reverseArray(anArr) {
    // base case: if the array has a length of 1, the reverse of the array
    // is just the array
    if (anArr.length === 1) {
        //however we have to make sure we're return a copy of the original array
        return anArr.slice();
    }
    //recursive case: array.length must get closer to one
    let newArr = [];
    //the first element in newArray should be the last element in the array
    let lastElement = anArr[anArr.length - 1];
    newArr.push(lastElement);
    //get the reversed array fpr the remaining elements 
    let reversedRemainingElements = reverseArray(anArr.slice(0, -1));

    newArr = newArr.concat(reversedRemainingElements);

    return newArr;
} */