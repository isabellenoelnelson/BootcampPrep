function backwardString(string) {

    if (string.length === 1) {
        console.log(string);
    }
    else {
        let lastChar = string[string.length - 1];
        console.log(lastChar) + backwardString(string.slice(0, -1));
    }
}




















































/* function backwardString(str) {

    if (str.length === 1) {
        console.log(str);
    }
    else {
        let lastChar = str[str.length - 1];
        console.log(lastChar);
        backwardString(str.slice(0, -1));
    }
}







// YOUR CODE BELOW
 function backwardString(str) {
    console.log(str[str.length - 1]);
    
    if (str.length > 1) {
        backwardString(str.slice(0, -1))
    }
} */

