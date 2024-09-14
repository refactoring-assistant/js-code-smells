function processRequest(request) {
  switch (request.type) {
    case 'create':
      processCreate(request.data);
      break;
    case 'delete':
      processDelete(request.data);
      break;
    case 'update':
      processUpdate(request.data);
      break;
    case 'archive':
      processArchive(request.data);
      break;
    case 'restore':
      processRestore(request.data);
      break;
    default:
      console.log('Invalid request type');
  }
}

function processCreate(data) {
  console.log('Processing create request:', data);
}

function processDelete(data) {
  console.log('Processing delete request:', data);
}

function processUpdate(data) {
  console.log('Processing update request:', data);
}

function processArchive(data) {
  console.log('Processing archive request:', data);
}

function processRestore(data) {
  console.log('Processing restore request:', data);
}

processRequest({ type: 'create', data: { id: 1, name: 'John' } });
processRequest({ type: 'delete', data: { id: 1 } });
processRequest({ type: 'update', data: { id: 1, name: 'Jane' } });
processRequest({ type: 'archive', data: { id: 1 } });
processRequest({ type: 'restore', data: { id: 1 } });
