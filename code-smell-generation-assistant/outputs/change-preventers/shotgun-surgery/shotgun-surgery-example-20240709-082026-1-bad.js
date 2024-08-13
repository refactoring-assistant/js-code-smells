class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    changePassword(newPass){
        this.password = newPass;
    }

    validatePassword(){
        // Some validation logic
    }
}

class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    changePassword(newPass){
        this.password = newPass;
    }

    validatePassword(){
        // Some similar validation logic as User
    }
}