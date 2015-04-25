var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jmkrumsick@gmail.com',
        pass: 'XXXX'
    }
});

var mailOptions = {
    from: 'Jeremy Krumsick ✔ <jmkrumsick@gmail.com>',
    to: 'jeremy@statefate.com', 
    subject: 'API FAILURE ON STATEFATE',
    text: 'TESTING EMAILer',
    html: '<b>Hello world ✔</b>'
};
 
function mailer(mailOptions){
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});
}

exports.mailer = mailer;