// YOUR CODE BELOW
let price; 
let state;

function taxCalculator(price, state) {
    if (state === 'NJ') {
        return (price * 0.06625) + price;
    } else if (state === 'NY') {
        return (price * 0.04) + price;
    }
}