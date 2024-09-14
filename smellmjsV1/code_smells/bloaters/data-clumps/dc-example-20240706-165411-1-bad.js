function shippingInfo(firstName, lastName, addressOne, cityOne, countryOne, postalOne) {
  console.log(
    `Shipping to ${firstName} ${lastName} at ${addressOne}, ${cityOne}, ${countryOne}, ${postalOne}`
  );
}

function billingInfo(firstName, lastName, addressTwo, cityTwo, countryTwo, postalTwo) {
  console.log(
    `Billing to ${firstName} ${lastName} at ${addressTwo}, ${cityTwo}, ${countryTwo}, ${postalTwo}`
  );
}

const FirstName = 'John';
const LastName = 'Doe';
const AddressOne = '123 Main St';
const CityOne = 'New City';
const CountryOne = 'USA';
const PostalOne = '12345';
const AddressTwo = '456 Broadway';
const CityTwo = 'Old City';
const CountryTwo = 'USA';
const PostalTwo = '67890';

shippingInfo(FirstName, LastName, AddressOne, CityOne, CountryOne, PostalOne);
billingInfo(FirstName, LastName, AddressTwo, CityTwo, CountryTwo, PostalTwo);