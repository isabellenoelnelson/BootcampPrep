// YOUR CODE BELOW
function backwardsString(str) {
    console.log(str[str.length - 1]);
    
    if (str.length > 1) {
        backwardsString(str.slice(0, -1))
    }
}