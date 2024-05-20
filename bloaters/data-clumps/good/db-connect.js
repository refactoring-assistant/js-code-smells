function connectToDatabase(dbConfig) {
  console.log(
    `Connecting to database at ${dbConfig.host}:${dbConfig.port} with user ${dbConfig.username}`
  );
}

function disconnectFromDatabase(dbConfig) {
  console.log(
    `Disconnecting from database at ${dbConfig.host}:${dbConfig.port} with user ${dbConfig.username}`
  );
}

function executeQuery(dbConfig, query) {
  console.log(
    `Executing query on database at ${dbConfig.host}:${dbConfig.port} with user ${dbConfig.username}: ${query}`
  );
}

const dbConfig = {
  host: 'localhost',
  port: 1234,
  username: 'admin',
  password: 'password',
};

const dbQuery = 'SELECT * FROM users';

connectToDatabase(dbConfig);
executeQuery(dbConfig, dbQuery);
disconnectFromDatabase(dbConfig);
