// YOUR CODE BELOW
function isTruthy(arg) {
    if (arg) {
        return true;
    }
    else {
        if (typeof arg === 'boolean') {
            return 'The boolean value false is falsey';
        }
        if (arg === null) {
            return 'The null value is falsey';
        }
        if (typeof arg === 'undefined') {
            return 'undefined is falsey';
        }
        if (arg === 0) {
            return 'The number 0 is falsey (the only falsey number)';
        }
        if (arg === '') {
            return 'The empty string is falsey (the only falsey string)';
        }
    }
}