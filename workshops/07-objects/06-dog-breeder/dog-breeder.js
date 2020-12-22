// YOUR CODE BELOW
function dogBreeder(name='Steve', age=0) {
    let dog = {};

    if (typeof name === 'number') {
        age = name;
        name = 'Steve';
    }

    dog.name = name;
    dog.age = age;

    return dog;
}