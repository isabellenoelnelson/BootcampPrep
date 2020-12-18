// YOUR CODE BELOW
function callThemAll(anObj, value) {
    let returnedValues = [];

    let objectValues = Object.values(anObj);
    
    for (let i = 0; i < objectValues.length; ++i) {
        const currentValue = objectValues[i];

        if (typeof currentValue === 'function') {
            returnedValues.push(currentValue(value));
        }
    }

    return returnedValues;
}