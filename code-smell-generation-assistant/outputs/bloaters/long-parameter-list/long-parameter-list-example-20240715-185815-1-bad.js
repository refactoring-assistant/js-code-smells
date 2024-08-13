function createPerson(firstName, lastName, age, address, phoneNumber, email, occupation, maritalStatus) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
    occupation: occupation,
    maritalStatus: maritalStatus
  };

  return person;
}