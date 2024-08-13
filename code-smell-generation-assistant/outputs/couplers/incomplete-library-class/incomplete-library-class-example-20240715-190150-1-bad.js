class DatabaseManager {
  constructor(host, username, password) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  connect() {
    console.log(`Connecting to database at ${this.host} with user ${this.username}`);
  }

  executeQuery(query) {
    console.log(`Executing query on database at ${this.host} with user ${this.username}: ${query}`);
  }
}

const dbManager = new DatabaseManager('localhost', 'admin', 'password');
dbManager.connect();
dbManager.executeQuery('SELECT * FROM users');