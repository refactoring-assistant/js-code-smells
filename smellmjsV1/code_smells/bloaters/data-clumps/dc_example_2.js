function getUserAddress(city, state, zip) {
  console.log(`Address: ${city}, ${state}, ${zip}`);
}

function getShippingAddress(city, state, zip) {
  console.log(`Shipping Address: ${city}, ${state}, ${zip}`);
}

function getBillingAddress(city, state, zip) {
  console.log(`Billing Address: ${city}, ${state}, ${zip}`);
}

const userCity = 'New York';
const userState = 'NY';
const userZip = '10001';

getUserAddress(userCity, userState, userZip);
getShippingAddress(userCity, userState, userZip);
getBillingAddress(userCity, userState, userZip);
