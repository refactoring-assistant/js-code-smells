function createUser(firstName, lastName, email, phoneNumber) {
  return {
    fullName: firstName + ' ' + lastName,
    email: email,
    phoneNumber: phoneNumber,
  };
}

function sendWelcomeEmail(firstName, lastName, email) {
  const fullName = firstName + ' ' + lastName;
  console.log(`Sending welcome email to ${fullName} at ${email}`);
}

function validatePhoneNumber(phoneNumber) {
  const isValid = /^\d{10}$/.test(phoneNumber);
  console.log(`Phone number ${phoneNumber} is valid: ${isValid}`);
}

const firstName = 'John';
const lastName = 'Doe';
const email = 'john.doe@example.com';
const phoneNumber = '5551234567';

const newUser = createUser(firstName, lastName, email, phoneNumber);
sendWelcomeEmail(firstName, lastName, email);
validatePhoneNumber(phoneNumber);
