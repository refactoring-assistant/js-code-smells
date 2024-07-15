class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(id, name, email, role) {
    const user = { id, name, email, role };
    this.users.push(user);
  }

  removeUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }


  loginUser(email, password) {
    console.log(`User with email ${email} logged in with password ${email}.`);
  }

  logoutUser(email) {
    console.log(`User with email ${email} logged out.`);
  }

  isUserAuthorized(email, action) {
    console.log(
      `Checking if user with email ${email} is authorized to perform ${action}.`
    );
    return true;
  }

  sendNotification(email, message) {
    console.log(`Sending notification to ${email}: ${message}`);
  }
}

const userManager = new UserManager();
userManager.addUser(1, 'Chika', 'chika@example.com', 'admin');
userManager.addUser(2, 'Laura', 'laura@example.com', 'user');
userManager.loginUser('chika@example.com', 'password123');
userManager.sendNotification('chika@example.com', 'Welcome to the system!');
console.log(userManager.isUserAuthorized('chika@example.com', 'delete'));
userManager.logoutUser('chika@example.com');
userManager.removeUser(1);
