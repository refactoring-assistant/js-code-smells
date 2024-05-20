class User {
  constructor(id, name, email, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(id, name, email, role) {
    const user = new User(id, name, email, role);
    this.users.push(user);
  }

  removeUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }
}

class AuthService {
  loginUser(email, password) {
    console.log(`User with email ${email} logged in.`);
  }

  logoutUser(email) {
    console.log(`User with email ${email} logged out.`);
  }
}

class AuthorizationService {
  isUserAuthorized(email, action) {
    console.log(
      `Checking if user with email ${email} is authorized to perform ${action}.`
    );
    return true;
  }
}

class NotificationService {
  sendNotification(email, message) {
    console.log(`Sending notification to ${email}: ${message}`);
  }
}

const userManager = new UserManager();
userManager.addUser(1, 'Chika', 'chika@example.com', 'admin');
userManager.addUser(2, 'Laura', 'laura@example.com', 'user');

const authService = new AuthService();
authService.loginUser('chika@example.com', 'password123');

const notificationService = new NotificationService();
notificationService.sendNotification(
  'chika@example.com',
  'Welcome to the system!'
);

const authorizationService = new AuthorizationService();
console.log(
  authorizationService.isUserAuthorized('chika@example.com', 'delete')
);

authService.logoutUser('chika@example.com');
userManager.removeUser(1);
