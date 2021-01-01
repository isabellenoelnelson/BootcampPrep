function theTruthCounts(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (Array.isArray(currentElement)) {
            sum += theTruthCounts(currentElement);
            
        } else {
            if (currentElement) {
                sum++;
            }
        }

        
        
        
    }

    return sum;
}
























































/* function theTruthCounts(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (Array.isArray(currentElement)) {
            sum += theTruthCounts(currentElement);
        }
        else {
            if (currentElement) {
                sum++;
            }
        }

    }

    return sum;
} */


















































// YOUR CODE BELOW
/* function theTruthCounts(values) {
    let count = 0;

    for (let i = 0; i < values.length; i++) {
        let element = values[i];

        if (Array.isArray(element)) {
            count += theTruthCounts(element);
        }
        else {
            if (element) {
                count++;
            }
        }
    }

    return count;
} */