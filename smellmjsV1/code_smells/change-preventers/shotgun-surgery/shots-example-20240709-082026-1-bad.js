class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  changePassword(newPass) {
    this.password = hashPassword(newPass);
  }

  validatePassword() {
    if (this.password.length < 8) {
      console.log('Password is too short');
    }
  }
}

class Admin {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  changePassword(newPass) {
    this.password = hashPassword(newPass);
  }

  validatePassword() {
    if (this.password.length < 8) {
      console.log('Password is too short');
    }
  }
}

function hashPassword(password) {
  return `hashed_${password}`;
}

const user = new User('john_doe', 'password123');
user.changePassword('newStrongPassword');

const admin = new Admin('admin_user', 'adminPass');
admin.changePassword('adminNewPassword');
