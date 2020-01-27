const express = require('express')
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');

require('dotenv').config()
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.post("/api/form",  (req,res) => {


    // const {firstname, lastname, subject, message} = req.body
    
  
   
    
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li> Name: ${req.body.name}</li>

         </ul>
         <h3>Message</h3>
         <h4>Subject: ${req.body.subject}</h4>
         <p style={{{ color:"red"}}}>Message: ${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "jonathanheroku0914@gmail.com",
                pass: "091499.j"
            }
        });

        let mailOptions = {
            from: "portfolio",
            to: "jonathanheroku0914@gmail.com",
            replyTo: "test@testaccount.com",
            subject: "New message",
            test: "req.body.message",
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log('ERROR',err)

            }

            res.json(info)
    
            console.log("message sent: %s", info.message)
            console.log("message URL: %s", nodemailer.getTestMessageUrl(info))
        }) 
    })
})

const PORT = process.env.PORT || 3001;
//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () => {
    console.log("server listening on http://localhost:3001")
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