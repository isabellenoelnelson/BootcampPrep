// YOUR CODE BELOW
function crazyCaps (str) {
    str = str.split('');
    for (var i = 0; i < str.length; i += 2) {
        str[i] = str.toUpperCase();
    }
    str = str.join('');
    return str;
}