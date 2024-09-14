class Store {
    constructor() { 
        this.productId = '';
        this.productName = '';
        this.productPrice = 0;
        this.productStock = 0;

        this.inventoryStatus = 'In Stock';
        this.inventoryThreshold = 10;

        this.promotionCode = '';
        this.promotionDiscount = 0;

        this.salesReport = [];
        this.inventoryReport = [];
    }

    addProduct(id, name, price, stock) {
        this.productId = id;
        this.productName = name;
        this.productPrice = price;
        this.productStock = stock;
        console.log(`Product ${name} added.`);
    }

    removeProduct(id) {
        console.log(`Product with ID ${id} removed.`);
    }

    getProductDetails() {
        return `Product: ${this.productName}, Price: ${this.productPrice}, Stock: ${this.productStock}`;
    }

    updateInventory(status, threshold) {
        this.inventoryStatus = status;
        this.inventoryThreshold = threshold;
        console.log(`Inventory status updated.`);
    }

    checkInventory() {
        return `Inventory Status: ${this.inventoryStatus}, Threshold: ${this.inventoryThreshold}`;
    }

    generateSalesReport() {
        console.log(`Generating sales report...`);
        return this.salesReport;
    }

    generateInventoryReport() {
        console.log(`Generating inventory report...`);
        return this.inventoryReport;
    }
}

const store = new Store();

store.addProduct(1, 'Laptop', 1000, 20);
store.getProductDetails();

store.applyPromotion('SAVE10', 10);
store.checkInventory();