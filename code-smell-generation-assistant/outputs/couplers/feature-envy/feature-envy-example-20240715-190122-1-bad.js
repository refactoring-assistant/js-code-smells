class User {
  constructor(name) {
    this.name = name;
  }
}

class Tweet {
  constructor(content, user) {
    this.content = content;
    this.user = user;
  }
}

const tweet1 = new Tweet('Hello, world!', new User('Alice'));
const tweet2 = new Tweet('JavaScript is great!', new User('Bob'));