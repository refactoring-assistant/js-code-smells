function shipProduct(customerName, productName, street, city, state, zip) {
  console.log(`Shipping product ${productName} to ${customerName} at ${street}, ${city}, ${state}, ${zip}`);
}

function returnProduct(customerName, productName, street, city, state, zip) {
  console.log(`Returning product ${productName} from ${customerName} at ${street}, ${city}, ${state}, ${zip}`);
}

const customerName = 'Alice';
const productName = 'Laptop';
const street = '123 Main St';
const city = 'Seattle';
const state = 'WA';
const zip = '98101';

shipProduct(customerName, productName, street, city, state, zip);
returnProduct(customerName, productName, street, city, state, zip);
