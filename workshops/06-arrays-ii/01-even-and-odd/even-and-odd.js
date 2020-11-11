// YOUR CODE BELOW
function evenAndOdd(arr) {
    let evenArray = [];
    let oddArray = [];

    for (let i = 0; i < arr.length; i++) {
       let currentNum = arr[i];
        if (currentNum % 2 === 0) {
            evenArray.push(currentNum);
        }
        else {
            oddArray.push(currentNum);
        }
    }
    return [evenArray, oddArray];
}