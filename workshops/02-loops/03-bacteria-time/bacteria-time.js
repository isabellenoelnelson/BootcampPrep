// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum){
    let time = 0;

    if (currentNum < targetNum) {
       while (currentNum < targetNum) {
        currentNum *= 2;
        time += 20;
       }
    } 
    else {
        return 'targetNum must be larger than currentNum';
    }
    return time;
}