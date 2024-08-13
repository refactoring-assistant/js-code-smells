class UserService {

  constructor() {
  }
  
  getUserData(userId) {
    let userDatabase = new UserDatabase();
    return userDatabase.getUserData(userId);
  }

}

class UserDatabase {

  constructor() {
  }

  getUserData(userId){
    // Fetch userdata from a database
  }
}

let userService = new UserService();
userService.getUserData('userId1');