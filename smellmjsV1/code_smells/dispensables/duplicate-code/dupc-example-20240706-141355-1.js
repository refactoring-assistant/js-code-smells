function login(username, password) {
  if (!username || username.length < 5) {
    return 'Username must be at least 5 characters long.';
  }
  if (!password || password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  // Code to authenticate user
}

function register(username, password) {
  if (!username || username.length < 5) {
    return 'Username must be at least 5 characters long.';
  }
  if (!password || password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  
  // Code to register new user
}

console.log(login('test', 'test123'));
console.log(register('test', 'test123'));