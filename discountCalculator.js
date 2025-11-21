function calculateDiscountedPrice(quantity, pricePerItem) {
    // Calculate total price for the given quantity
    let totalPrice = quantity * pricePerItem;

    // Apply 10% discount for 10 or more items
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice;