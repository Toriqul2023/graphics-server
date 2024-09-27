const nodemailer=require('nodemailer')
let transporter = nodemailer.createTransport({
    host: "smtp.email.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "mohammadtoriqulislamtoriq@gmail.com",
      pass: "jn7jnAPss4f63QBp6D",
    },
});

exports.sendMail=async(req,res)=>{
    let mailOptions = {
        from: 'mohammadtoriqulislamtoriq@gmail.com', // Sender address
        to: 'rvstowhid', // List of recipients
        subject: 'Node.js Email Test', // Subject line
        text: 'Hello from Node.js!', // Plain text body
        html: '<b>Hello from Node.js!</b>' // HTML body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(`Error: ${error}`);
        }
        console.log(`Message Sent: ${info.response}`);
        res.send('hello')
    });
}