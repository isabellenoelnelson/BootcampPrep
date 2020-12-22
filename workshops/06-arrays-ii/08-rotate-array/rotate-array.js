// YOUR CODE BELOW
function rotateArray(origArray, numOfRotations) {
    let direction = numOfRotations >= 0 ? 'right' : 'left';

    let rotatedArray = origArray.slice();

    for (let i = 0; i < Math.abs(numOfRotations); i++) {
        if (direction === 'right') {
            rotatedArray.unshift(rotatedArray.pop());
        }
         else {
            rotatedArray.push(rotatedArray.shift());
         }
    }

return rotatedArray;
}