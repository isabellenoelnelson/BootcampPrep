// YOUR CODE BELOW
function backwardString(str) {
    console.log(str[str.length - 1]);
    
    if (str.length > 1) {
        backwardString(str.slice(0, -1))
    }
}