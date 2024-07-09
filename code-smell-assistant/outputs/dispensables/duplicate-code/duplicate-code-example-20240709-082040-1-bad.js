// AI-generated code smell for Duplicate-Code

function calculatePrice(productPrice, qty) {
    let totalPrice = productPrice * qty;
    let vat = totalPrice * 0.15;
    let finalPrice = totalPrice + vat;
    return finalPrice;
}

function computeTotal(amount, quantity) {
    let totalAmount = amount * quantity;
    let tax = totalAmount * 0.15;
    let finalAmount = totalAmount + tax;
    return finalAmount;
}