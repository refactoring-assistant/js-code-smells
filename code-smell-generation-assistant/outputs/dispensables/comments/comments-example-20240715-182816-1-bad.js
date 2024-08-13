function fetchData() {
  // create variable request
  var request = new XMLHttpRequest(); 
  // open request
  request.open('GET', '/my-api', true); 
  // on load request
  request.onload = function() { // This function runs on request load
    // TODO: handle response
    if (request.status >= 200 && request.status < 400) { // Check for status code 200
      var data = JSON.parse(request.responseText); // Parse response text
      // do something with data
    } else {
      // Log error
    }
  };
  // on error request
  request.onerror = function() { // This function runs on request error
    // TODO: handle error
  };
  // send request
  request.send(); // Send the request
}