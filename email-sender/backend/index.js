async function main() {
    const express = require("express");
    const sendMail = require("./sendEmail");

    const app = express();
    const port = 8080;

    app.get("/", (req, res) => {
        sendMail();
        res.send("Hello World!");
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

main().then(() => {
    console.log("done");
});
