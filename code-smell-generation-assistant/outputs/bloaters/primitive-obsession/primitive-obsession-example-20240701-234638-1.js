function getUserFullName(user) {
  const firstName = user[0];
  const lastName = user[1];
  return `${firstName} ${lastName}`;
}

const user = ['Alice', 'Bennett'];
console.log(getUserFullName(user));