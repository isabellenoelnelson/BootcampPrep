function madLibs(string, array) {
    let result = '';
    let stringArray = string.split('*');

    for (let i = 0; i < stringArray.length - 1; i++) {
        let currentElement = stringArray[i];
        result += currentElement;

        if (currentElement !== stringArray[stringArray.length - 1]) {
            result += array[i % array.length];
        }
    }

    return result;
}

let testSentence = 'Jack and * went up * *';
let testWords = ['Jill', 'the', 'hill'];

console.log(madLibs(testSentence, testWords));
