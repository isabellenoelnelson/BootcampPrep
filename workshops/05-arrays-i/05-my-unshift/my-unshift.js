// YOUR CODE BELOW
function myUnshift(array, value) {
    let finalArray = [];

    for (let i = 0; i < array.length + 1; i++) {
       if (i === 0) {
        finalArray.push(value);
       }
       else {
        finalArray.push(array[i - 1]);
       }
   }
   return finalArray;
}