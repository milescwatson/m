var fetch = require('node-fetch');

var getText = function(url, callback){
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  .then((response)=>response.text())
  .then(function(response){
    callback(null, response)
  })
  .catch(function(error){
    callback(error, null)
  });
}

var getJSON = function(url, callback){
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(response){
    callback(null, response);
  })
  .catch(function(error){
    callback(error, null);
  });
}

var postJSON = function(url, body, callback){

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(response){
    callback(null, response);
  })
  .catch(function(error){
    callback(error, null);
  });
}

exports.getText = getText;
exports.getJSON = getJSON;
exports.postJSON = postJSON;
