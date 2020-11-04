// YOUR CODE BELOW
function onlyOdds(num) {
    let zero = 0; 
    let sum = 0;

    if (num < 1) {
        return zero; 
    } 
    else {
        for (var i = 1; i < num; i += 2) {
            sum += i; 
        }   
    }

    return sum;   
}