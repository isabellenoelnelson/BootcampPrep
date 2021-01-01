function countVowels(string) {
    let vowels = 'aeiou';
    string = string.toLowerCase();
    let vowelCount = 0;
    let currentChar = string[0];
    let rest = string.slice(1);

    if (string.length === 0) {
        return 0;
    }
    else {
        if (vowels.includes(currentChar)) {
         vowelCount += 1;
        }
        vowelCount += countVowels(rest);
    }
    
    return vowelCount;
}






/* function countVowels(string) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let firstChar = string[0];
    let rest = string.slice(1);

    if (string.length === 0) {
        return 0;
    }
    else {
        if (vowels.includes(firstChar)) {
            vowelCount += 1;
        }

        vowelCount += countVowels(rest);
    }
  
    return vowelCount;
}





// YOUR CODE BELOW
/* function countVowels(string) {
    // base case: if string.length === 0, it doesn't have any vowels
    if (string.length === 0) {
        return 0;
    }

    // recursive case: string.length must get closer to 0
    let numVowels = 0;

    // if the first letter is a vowel
    if (isAVowel(string[0])) {
        // increment the numVowels
        numVowels += 1;
    }

    // add the count of vowels in the remaining characters of the string
    numVowels += countVowels(string.slice(1));

    return numVowels;
}

// helper function that returns true if the character is a vowel
function isAVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
} */