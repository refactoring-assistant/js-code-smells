// AI-generated code smell for Data-Clumps
function createUser(username, password, email, address, phone) {
  let user = {};
  user.username = username;
  user.password = password;
  user.email    = email;
  user.address  = address;
  user.phone    = phone;
  return user;
}

function updateUser(user, newUsername, newPassword, newEmail, newAddress, newPhone) {
  user.username = newUsername;
  user.password = newPassword;
  user.email    = newEmail;
  user.address  = newAddress;
  user.phone    = newPhone;
  return user;
}

let user = createUser('johnDoe', 'password123', 'johndoe@example.com', '1 Infinite Loop', '123-456-7890');
console.log(user);

user = updateUser(user, 'johnDoe', 'newpassword123', 'johndoe@example.com', '1 Infinite Loop', '098-765-4321');
console.log(user);