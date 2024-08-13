function createCustomer(firstName, lastName, street, city, state, zip, email, phone) {
    console.log(`Creating customer ${firstName} ${lastName} with address ${street}, ${city}, ${state}, ${zip} and contact details ${email} and ${phone}.`);
}

function updateCustomer(firstName, lastName, street, city, state, zip, email, phone) {
    console.log(`Updating customer ${firstName} ${lastName} with new address ${street}, ${city}, ${state}, ${zip} and new contact details ${email} and ${phone}.`);
}

function deleteCustomer(firstName, lastName, street, city, state, zip, email, phone) {
    console.log(`Deleting customer ${firstName} ${lastName} with address ${street}, ${city}, ${state}, ${zip} and contact details ${email} and ${phone}.`);
}

const customerFirstName = 'John';
const customerLastName = 'Doe';
const customerStreet = '123 Main St';
const customerCity = 'Anytown';
const customerState = 'Any state';
const customerZip = '12345';
const customerEmail = 'johndoe@example.com';
const customerPhone = '123-456-7890';

createCustomer(customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone);
updateCustomer(customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone);
deleteCustomer(customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone); 