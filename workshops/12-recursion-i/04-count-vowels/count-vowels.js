// YOUR CODE BELOW
function countVowels(aStr) {
    const VOWELS = 'aeiouAEIOU';

    if (!aStr.length) {
        return 0;
    }

    const firstChar = aStr[0];

    if (VOWELS.indexOf(firstChar) !== -1) {
        return 1 + countVowels(aStr.slice(1));
    }
    else {
        return countVowels(aStr.slice(1));
    }
}