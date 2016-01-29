// Dependencies
var express = require('express');
var nodemailer = require('nodemailer');

var gmail = process.env.GMAIL || 'example@gmail.com';
var gmailPass = process.env.GMAILPASS || 'password';
var mailTo = process.env.MAILTO || 'example@example.com';

var router = express.Router();
var transporter = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: gmail,
            pass: gmailPass
        }
      }
      );

router.post('/contact-form', function(req, res, next) {
  console.log('sending mail');
  var data = req.body;
  console.log(data);

  var message = 'Message from: '+data.contactEmail + '\nMessage:\n' + data.contactMsg;

  var mailOptions = {
    from: data.contactEmail,
    to: mailTo,
    subject: 'Portfoliomessage from ' + data.contactName,
    text: message
};

  transporter.sendMail(mailOptions, function(error){
  if(error){
      console.log('Error occured');
      console.log(error.message);
      return;
  }
  console.log('Message sent successfully!');
  });

  res.json(data);
});

module.exports= router;
