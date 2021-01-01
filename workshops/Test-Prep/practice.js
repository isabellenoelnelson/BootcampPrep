// Write a function 'sumEvensOnly' that, given a starting number and ending number, returns the sum of the even numbers between the starting and ending numbers. 

function sumEvensOnly(start, end) {
    let sum = 0;

    for (let i = start; i < end; i++) {
        let currentNum = i;

        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

// Write a function 'largestThreeDigitNum' that, given a string of digits between 1 and 9, 
// will return the largest three-digit number from the given string. (i.e. 42961594 returns 961).

function largestThreeDigitNum(string) {
    let largestNum = 0;

    for (let i = 0; i < string.length; i++) {
        let currentNum = Number(string.slice(i, i+3));

        if (currentNum > largestNum) {
            largestNum = currentNum;
        }
    }

    return largestNum;
}

// Write a function isPrime that, given a number, num, determines if num is a prime number. Return true if the number is prime or false if it isn’t prime.

function isPrime(num) {

    if (num === 1 || num === 2) {
        return true;
    } 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
    }

        return true;
}

// Write a function called madLibs that takes two arguments, a string containing asterixes and an array of words. The function should replace each asterix 
// with one word from the array. If the number of asterixes is greater than the number of words in the array, start using words from the beginning of the array again. 
// i.e.  str = “ The * was really *, *, and * today.” and arr = [“dog”, “happy”, “paper”]

function madLibs(string, array) {
    let result = '';
    let stringArray = string.split('*');

    for (let i = 0; i < stringArray.length - 1; i++) {
        let currentElement = stringArray[i];
    }

    
}