function userRegistration(user) {
  if (user.username === '') {
    console.log('Username is required');
    return false;
  }
  if (user.password === '') {
    console.log('Password is required');
    return false;
  }
  if (user.email === '') {
    console.log('Email is required');
    return false;
  }
  if (user.firstName === '') {
    console.log('First name is required');
    return false;
  }
  if (user.lastName === '') {
    console.log('Last name is required');
    return false;
  }
  if (user.dob === '') {
    console.log('Date of birth is required');
    return false;
  }
  if (user.address === '') {
    console.log('Address is required');
    return false;
  }
  if (user.zip === '') {
    console.log('ZIP code is required');
    return false;
  }
  if (user.country === '') {
    console.log('Country is required');
    return false;
  }
  if (user.phoneNumber === '') {
    console.log('Phone number is required');
    return false;
  }
  if (user.securityQuestion === '') {
    console.log('Security question is required');
    return false;
  }
  if (user.securityAnswer === '') {
    console.log('Security answer is required');
    return false;
  }

  console.log('Registration successful!');
}
