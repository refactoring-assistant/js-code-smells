function connectToDatabase(host, port, username, password) {
  console.log(
    `Connecting to database at ${host}:${port} with user ${username}`
  );
}

function disconnectFromDatabase(host, port, username, password) {
  console.log(
    `Disconnecting from database at ${host}:${port} with user ${username}`
  );
}

function executeQuery(host, port, username, password, query) {
  console.log(
    `Executing query on database at ${host}:${port} with user ${username}: ${query}`
  );
}

const dbHost = 'localhost';
const dbPort = 5432;
const dbUsername = 'admin';
const dbPassword = 'password';
const dbQuery = 'SELECT * FROM users';

connectToDatabase(dbHost, dbPort, dbUsername, dbPassword);
executeQuery(dbHost, dbPort, dbUsername, dbPassword, dbQuery);
disconnectFromDatabase(dbHost, dbPort, dbUsername, dbPassword);
