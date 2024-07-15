// AI-generated code smell for Middle-Man
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

In the above code, the UserService class is acting as a "middle-man". It is not doing anything substantial rather than just delegating the task to UserDatabase class. The client code could directly interact with UserDatabase class. Removing middle man here could make the code simpler and easier to maintain.