function isPalindrome(string) {
    string = string.toLowerCase();

    if (string.length === 0 || string.length === 1) {
        return true;
    }

    let firstChar = string[0];
    let lastChar = string[string.length - 1];

    if (firstChar === lastChar) {
        isPalindrome(string.slice(1, -1));
    } else {
        return false;
    }

    return true;
}























































/* function isPalindrome(string) {
    string = string.toLowerCase();

    if (string.length === 0 || string.length === 1) {
        return true;
    }

    let firstChar = string[0];
    let lastChar = string[string.length - 1];

    if (firstChar === lastChar) {
        let remaining = string.slice(1, -1);
        return isPalindrome(remaining);
    }
    else {
        return false;
    }
}

















































/*
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

} */