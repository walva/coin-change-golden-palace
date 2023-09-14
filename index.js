const TWO = 2, FIVE = 5, TEN = 10

const change = (amount) => {
    const changeObject = { two: 0, five: 0, ten: 0 };

    // we cannot return anything to the customer if the amount is less or equal to 3 so we return null
    if (amount <= 3) {
        return null;
    }

    // in the case we have a remainder when dividing by two -> it's more efficient to return a 5 dollar bill to the customer first  
    if (amount % TWO) {
        amount -= FIVE;
        changeObject.five = 1;
    }
    // then it's a matter of returning the maximum amount of ten bills 
    changeObject.ten = Math.floor(amount / TEN);
    // and finally giving back some two bills if needed
    changeObject.two = (amount % TEN) / TWO;

    return changeObject;
};

exports.change = change