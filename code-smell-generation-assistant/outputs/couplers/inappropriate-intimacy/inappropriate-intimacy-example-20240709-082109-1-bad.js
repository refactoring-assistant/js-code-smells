// AI-generated code smell for Inappropriate-Intimacy

class Account {
    constructor(id, username, password, profile) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.profile = profile;
    }

    getProfile() {
        return this.profile;
    }
}

class Profile {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getAge() {
        return this.age;
    }

}

class User {
    constructor(account) {
        this.account = account;
    }

    getUserId() {
        return this.account.id;
    }

    getUserProfile() {
        return this.account.getProfile();
    }

    updateUserProfile(newProfile) {
        this.account.profile = newProfile;
    }
}

let userAccount = new Account(1, 'test', 'password', new Profile('Jane', 30, 'test@email.com'));
let user = new User(userAccount);
console.log(user.getUserProfile().getAge()); // Inappropriate intimacy: User class is too dependent on Account and Profile classes
user.updateUserProfile(new Profile('Jane', 31, 'test@email.com'));  // Inappropriate intimacy: User class access Profile directly