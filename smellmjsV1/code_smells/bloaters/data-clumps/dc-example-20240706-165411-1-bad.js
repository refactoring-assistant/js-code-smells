function shippingInfo(address, city, country, postal) {
  console.log(`Shipping to: ${address}, ${city}, ${country}, ${postal}`);
}

function billingInfo(address, city, country, postal) {
  console.log(`Billing to: ${address}, ${city}, ${country}, ${postal}`);
}

const AddressOne = '123 Main St';
const CityOne = 'New City';
const CountryOne = 'USA';
const PostalOne = '12345';
const AddressTwo = '456 Broadway';
const CityTwo = 'Old City';
const CountryTwo = 'USA';
const PostalTwo = '67890';

shippingInfo(AddressOne, CityOne, CountryOne, PostalOne);
billingInfo(AddressTwo, CityTwo, CountryTwo, PostalTwo);
