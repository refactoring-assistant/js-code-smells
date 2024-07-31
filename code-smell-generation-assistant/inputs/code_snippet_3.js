class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

function validateUserRegistration(user) {
  if (!user.username || user.username.length < 5) {
    console.log('Username must be at least 5 characters long.');
    return false;
  }
  if (!user.password || user.password.length < 8) {
    console.log('Password must be at least 8 characters long.');
    return false;
  }
  if (!user.email || !user.email.includes('@')) {
    console.log('Email must be valid.');
    return false;
  }
  return true;
}

function validateUserUpdate(user) {
  if (!user.username || user.username.length < 5) {
    console.log('Username must be at least 5 characters long.');
    return false;
  }
  if (!user.password || user.password.length < 8) {
    console.log('Password must be at least 8 characters long.');
    return false;
  }
  if (!user.email || !user.email.includes('@')) {
    console.log('Email must be valid.');
    return false;
  }
  return true;
}

const user1 = new User('user1', 'password1', 'user1@example.com');
const isRegistrationValid = validateUserRegistration(user1);
console.log(`Registration valid: ${isRegistrationValid}`);

const user2 = new User('user2', 'password2', 'user2@example.com');
const isUpdateValid = validateUserUpdate(user2);
console.log(`Update valid: ${isUpdateValid}`);
