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
