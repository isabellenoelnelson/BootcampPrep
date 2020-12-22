// YOUR CODE BELOW
function oddCouple(arr1) {
   let oddArray = [];
   let oddCount = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 !== 0 && oddCount < 2) {
            oddArray.push(arr1[i]);
            oddCount += 1;
        }
    }
    return oddArray;
}