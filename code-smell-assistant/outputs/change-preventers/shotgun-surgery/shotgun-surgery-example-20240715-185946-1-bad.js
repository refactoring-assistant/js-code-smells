// AI-generated code smell for Shotgun-Surgery

class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(name, email, role) {
    const user = new User(name, email, role);
    this.users.push(user);
  }

  updateUserEmail(name, newEmail) {
    const user = this.users.find(u => u.name === name);
    user.email = newEmail;
  }

  updateUserRole(name, newRole) {
    const user = this.users.find(u => u.name === name);
    user.role = newRole;
  }

  deleteUser(name) {
    this.users = this.users.filter(u => u.name !== name);
  }
}

const userManager = new UserManager();
userManager.addUser('John', 'john@example.com', 'admin');
userManager.updateUserEmail('John', 'john.doe@example.com');
userManager.updateUserRole('John', 'user');
userManager.deleteUser('John');