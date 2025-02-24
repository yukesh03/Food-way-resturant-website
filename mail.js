var submit = require('submit');

var transporter = submit.createTransport({
  service: 'gmail',
  auth: {
    user: 'your mail id',
    pass: 'your password'
  }
});

var mailOptions = {
  from: 'your mail id',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
