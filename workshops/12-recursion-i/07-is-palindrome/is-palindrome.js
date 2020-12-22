// YOUR CODE BELOW
function isPalindrome(string) {
    string = string.toLowerCase();

    if (string.length === 1) {
        return true;
    }

    if (string.length === 2) {
        return string[0] === string[1];
    }

    let firstLetter = string[0];
    let lastLetter = string.slice(-1);

    if (firstLetter !== lastLetter) {
        
        return false;
    }

    let remainingStringIsPalindrome = isPalindrome(string.slice(1, -1));

    return remainingStringIsPalindrome;

}