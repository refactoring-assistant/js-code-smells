function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getFormattedAddress(street, city, state, zipcode) {
  return street + ', ' + city + ', ' + state + ' ' + zipcode;
}

const firstName = 'Alice';
const lastName = 'Bennett';
const street = '123 Main St';
const city = 'New York';
const state = 'NY';
const zipcode = '10001';

console.log('Full Name: ' + getFullName(firstName, lastName));
console.log('Address: ' + getFormattedAddress(street, city, state, zipcode));
