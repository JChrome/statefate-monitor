var requester = require("./requester.js");
var mailer = require("./mailer.js");

var url = 'http://statefate.no-ip.biz:8008/api/protest/search?q=title%3Aalcohol';

console.log(requester.makeRequest(url));

function returnS(){
	return "hotdog";
}

console.log(returnS());