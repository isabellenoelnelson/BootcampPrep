// YOUR CODE BELOW
function exponentiate(base, power) {
    var final;

    if (power === 0) {
       final = 1;
    } 
    else {
     final = base ** power;
    }
    return final;
}