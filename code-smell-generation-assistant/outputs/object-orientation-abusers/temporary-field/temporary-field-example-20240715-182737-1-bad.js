class ShoppingCart {
    constructor() {
        this.items = [];
        this.tempDiscount = 0; // Temporary field
    } 

    addItem(item) {
        this.items.push(item);
    } 

    applyDiscount(discountCode) {
        // The temporary field is only relevant in the context of this function
        this.tempDiscount = getDiscountForCode(discountCode);
    } 

    calculateTotal() {
        let total = this.items.reduce((sum, item) => sum + item.price, 0);

        // The temporary field is a short-lived field that is used and 
        // then discarded, making it a code smell.
        if (this.tempDiscount) {
            total -= this.tempDiscount;
            this.tempDiscount = 0;
        }

        return total;
    }
}