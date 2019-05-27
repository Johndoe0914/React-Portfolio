const express = require('express')
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
require('dotenv').config()
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.post("/api/form", (req,res) => {
    console.log(req)
    
    nodeMailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li> Name: ${req.body.firstname} ${req.body.lastname}</li>

         </ul>
         <h3>Message</h3>
         <h4>Subject: ${req.body.subject}</h4>
         <p style={{{ color:"red"}}}>Message: ${req.body.message}</p>
        `

        let transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                user: "jonathandiaz0914@gmail.com",
                pass: "091499.j"
            }
        });

        let mailOptions = {
            from: "test@testaccount.com",
            to: "jonathandiaz0914@gmail.com",
            replyTo: "test@testaccount.com",
            subject: "New message",
            test: "req.body.message",
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)

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