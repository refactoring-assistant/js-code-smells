function userRegistration(username, password, email, firstName, lastName, dob, address, zip, country, phoneNumber, securityQuestion, securityAnswer) {
  if( username === '') {
    console.log('username is required');
    return false;
  } 
  else if( password === ''){
    console.log('password is required');
    return false;
  }
  else if( email === ''){
    console.log('email is required');
    return false;
  }
  else if( firstName === ''){
    console.log('firstName is required');
    return false;
  }
  else if( lastName === ''){
    console.log('lastName is required');
    return false;
  }
  else if( dob === ''){
    console.log('dob is required');
    return false;
  }
  else if( address === ''){
    console.log('address is required');
    return false;
  }
  else if( zip === ''){
    console.log('zip is required');
    return false;
  }
  else if( country === ''){
    console.log('country is required');
    return false;
  }
  else if( phoneNumber === ''){
    console.log('phoneNumber is required');
    return false;
  }
  else if( securityQuestion === ''){
    console.log('securityQuestion is required');
    return false;
  }
  else if( securityAnswer === ''){
    console.log('securityAnswer is required');
    return false;
  }
  else {
    console.log('Registration successful!');
    // code to register the user
  }
}