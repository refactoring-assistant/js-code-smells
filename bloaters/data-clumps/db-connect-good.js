class DatabaseConfig {
  constructor(host, port, username, password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }
}

class DatabaseManager {
  connect(config) {
    console.log(
      `Connecting to database at ${config.host}:${config.port} with user ${config.username}`
    );
  }

  disconnect(config) {
    console.log(
      `Disconnecting from database at ${config.host}:${config.port} with user ${config.username}`
    );
  }

  executeQuery(config, query) {
    console.log(
      `Executing query on database at ${config.host}:${config.port} with user ${config.username}: ${query}`
    );
  }
}

const dbConfig = new DatabaseConfig('localhost', 1234, 'admin', 'password');
const dbQuery = 'SELECT * FROM users';

const dbManager = new DatabaseManager();
dbManager.connect(dbConfig);
dbManager.executeQuery(dbConfig, dbQuery);
dbManager.disconnect(dbConfig);
