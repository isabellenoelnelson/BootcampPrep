// YOUR CODE BELOW
function lastFridayNight(transactions) {
    let price = 0;

    for (let i = 0; i < transactions.length; i++) {
        let currentElement = transactions[i];
        price += currentElement['amount'];
    }
    
    return price;
}