function createUser(firstName, lastName, address, city, state, country) {
  return `${firstName} ${lastName} lives at ${address}, ${city}, ${state}, ${country}`;
}

const firstName = 'John';
const lastName = 'Doe';
const address = '123 Main Street';
const city = 'New York';
const state = 'NY';
const country = 'USA';

console.log(createUser(firstName, lastName, address, city, state, country));
