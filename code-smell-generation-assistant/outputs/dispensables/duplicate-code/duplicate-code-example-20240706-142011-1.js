function addPerson(firstname, lastname, age) {
  if (!firstname || !lastname) {
    console.log('First name and last name are required.');
    return false;
  }
  if (typeof age !== 'number') {
    console.log('Age must be a number.');
    return false;
  }
  return true;
}

function updatePerson(firstname, lastname, age) {
  if (!firstname || !lastname) {
    console.log('First name and last name are required.');
    return false;
  }
  if (typeof age !== 'number') {
    console.log('Age must be a number.');
    return false;
  }
  return true;
}

const isPersonAdded = addPerson('John', 'Doe', 25);
console.log(`Person added: ${isPersonAdded}`);

const isPersonUpdated = updatePerson('Jane', 'Doe', 28);
console.log(`Person updated: ${isPersonUpdated}`);
