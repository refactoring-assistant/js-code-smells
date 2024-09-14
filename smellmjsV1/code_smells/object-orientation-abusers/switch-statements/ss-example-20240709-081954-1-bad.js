function processRequest(request) {
    switch (request.type) {
        case 'create':
            // process create request
            processCreate(request.data);
            break;
        case 'delete':
            // process delete request
            processDelete(request.data);
            break;
        case 'update':
            // process update request
            processUpdate(request.data);
            break;
        default:
            console.log('Invalid request type');
    }
}