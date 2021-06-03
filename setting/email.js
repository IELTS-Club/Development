const nodemailer=require("nodemailer");
const config = require("config");

function send(email,text,subject,html){
 let transporter = nodemailer.createTransport({
    host: "mailservice6.greenhost.com",
    port: 587,
    secure:false, // true for 465, false for other ports
    auth: {
      user: "info@ieltsdrn.com", // generated ethereal user
      pass: config.get("email-pass"), // generated ethereal password
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"آیلتس کلاب | IeltsClub" <info@ieltsdrn.com>', // sender address
    to: email, // list of receivers
    text: text,
    subject: subject, // Subject line
    html: html, // html body
  };
  transporter.sendMail(mailOptions,(error,info)=>{
      if(error){
          return console.log(error)
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  })
  
  }

module.exports =send;