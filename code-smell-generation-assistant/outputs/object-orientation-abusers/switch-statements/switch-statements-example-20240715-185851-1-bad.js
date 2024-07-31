// AI-generated code smell for Switch-Statements
function performAction(action) {
  switch (action) {
    case 'create':
      console.log('Performing create action');
      break;
    case 'read':
      console.log('Performing read action');
      break;
    case 'update':
      console.log('Performing update action');
      break;
    case 'delete':
      console.log('Performing delete action');
      break;
    default:
      console.log('Unknown action');
  }
}

performAction('read');
performAction('delete');
performAction('update');
performAction('foobar');