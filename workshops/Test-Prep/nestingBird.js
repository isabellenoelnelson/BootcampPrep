//  Given a deeply nested array (["r", "o", ["b", ["i"], "n"]]) write a function called nestingBird that returns the contents of the array as a string (“robin”).

function nestingBird(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (Array.isArray(currentElement)) {
            result += nestingBird(currentElement);
        } else {
            result += currentElement;
        }
    }

    return result;
}

console.log(nestingBird(["r", "o", ["b", ["i"], "n"]]));
