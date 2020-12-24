// YOUR CODE BELOW
function arraySum(anArr) {
    let sum = 0;

    anArr.forEach((elemOrArray) => {
        if (Array.isArray(elemOrArray)) {
            sum += arraySum(elemOrArray);
        } else {
            sum += elemOrArray;
        }
    })

    return sum;
}