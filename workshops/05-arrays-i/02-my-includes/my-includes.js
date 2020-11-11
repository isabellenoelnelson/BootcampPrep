// YOUR CODE BELOW
function myIncludes(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
            return true;
        }
    }
    return false;
}
    