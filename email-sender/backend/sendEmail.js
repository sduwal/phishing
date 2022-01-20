// https://app-smtp.sendinblue.com/real-time
const fs = require("fs");
const nodemailer = require("nodemailer");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

module.exports = async function ({ to }) {
    let data = require("./data/index");

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com", // hostname
            port: 587, // port for secure SMTP
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        data = data.map(async (item) => {
            const mailOptions = {
                from: item.from,
                to: to,
                subject: item.subject,
                html: await readFile(`./data/htmls/${item.file}`, "utf8"),
            };

            transporter.sendMail(mailOptions);
        });

        await Promise.all(data);
        return { ok: true, message: "Email sent" };
    } catch (err) {
        console.log(err.message);
        return { ok: false, message: err.message };
    }
};
