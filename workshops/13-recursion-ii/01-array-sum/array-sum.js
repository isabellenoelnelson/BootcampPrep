function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (Array.isArray(currentElement)) {
            sum += arraySum(currentElement);
        }
        else {
            sum += currentElement;
        }
    }

    return sum;
}























































/* function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (Array.isArray(currentElement)) {
            sum += arraySum(currentElement);
        } else {
            sum += currentElement;
        }
    }

    return sum;
} */













































// YOUR CODE BELOW
/* function arraySum(anArr) {
    let sum = 0;

    anArr.forEach((elemOrArray) => {
        if (Array.isArray(elemOrArray)) {
            sum += arraySum(elemOrArray);
        } else {
            sum += elemOrArray;
        }
    })

    return sum;
} */