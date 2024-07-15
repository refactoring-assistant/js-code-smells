// AI-generated code smell for Inappropriate-Intimacy
class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    
    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    } 
}

class Login{
    login(user){
        if(user.username === "admin" && user.getPassword() === "password"){
            console.log('Logged in successfully');
        } else {
            console.log('Login failed');
        }
    }
}

const user = new User("admin", "password");
const login = new Login();
login.login(user);


In this example, the `login` method of the `Login` class displays `inappropriate-intimacy` code smell by directly accessing the `username` property and the `getPassword` method of the `User` class. Instead, it should ask the `User` class whether the given password is correct or not, thus violating the Law of Demeter.