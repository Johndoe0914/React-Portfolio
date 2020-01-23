const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.post("/api/form1", (req,res) => {

    const {firstname, lastname, subject, message} = req.body
    
   var headers = req.headers

    console.log(headers)
  
   
    
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li> Name: ${firstname} ${lastname}</li>

         </ul>
         <h3>Message</h3>
         <h4>Subject: ${subject}</h4>
         <p style={{{ color:"red"}}}>Message: ${message}</p>
        `

        let transporter = nodeMailer.createTransport({
            service: "outlook",
            auth: {
                user: "jonathanheroku0914@hotmail.com",
                pass: "091499.j"
            }
        });

        let mailOptions = {
            from: "test@testaccount.com",
            to: "jonathanheroku0914@hotmail.com",
            replyTo: "test@testaccount.com",
            subject: "New message",
            test: "req.body.message",
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log('ERROR',err)

            }
    
            console.log("message sent: %s", info.message)
            console.log("message URL: %s", nodeMailer.getTestMessageUrl(info))
        }) 
    })
})

const PORT = process.env.PORT || 5000;
//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () => {
    console.log("server listening on http://localhost:5000")
})
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }