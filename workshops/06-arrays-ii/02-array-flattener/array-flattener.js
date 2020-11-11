// YOUR CODE BELOW
function arrayFlattener(array) {
    let finalArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                let innerElement = element[j];
                finalArray.push(innerElement);
            }
        }
        else {
            finalArray.push(element);
        }
    }
    return finalArray;
}