// AI-generated code smell for Data-Class
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

let user = new User('John', 'john@example.com', 25);

console.log('User Name:', user.name);
console.log('User Email:', user.email);
console.log('User Age:', user.age);