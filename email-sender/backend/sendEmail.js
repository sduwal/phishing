// https://app-smtp.sendinblue.com/real-time

module.exports = async function () {
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com", // hostname
        port: 587, // port for secure SMTP
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: "Text <axuj@sroff.com>",
        to: "axuj@sroff.com",
        subject: "Hello from Node.js",
        text: "Hello world!",
    };

    transporter.sendMail(mailOptions, (err, info) => {
        console.log("TEst");
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};
