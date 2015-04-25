var request = require('request');
var nodemailer = require('nodemailer');

function makeRequest(url){
	var returnStatement;
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    returnStatement = body; // Show the HTML for the Google homepage. 
	  }
	  else {
	  	returnStatement = statusCode;
	  }
	})
	return returnStatement;
}

exports.makeRequest = makeRequest;
