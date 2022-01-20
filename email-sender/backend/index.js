const express = require("express");
const sendMail = require("./sendEmail");
const cors = require("cors");
const helmet = require("helmet");
async function main() {
    require("dotenv").config();

    const app = express();
    app.use(express.json());
    app.use(
        cors({
            origin: "*",
            methods: ["GET"],
        })
    );
    app.use(helmet());
    // app.use(express.urlencoded({ extended: true }));

    const port = 8080;

    app.get("/", async (req, res) => {
        console.log("I have been summoned");
        if (!req.query.to) {
            res.status(400).send({
                ok: false,
                message: "Missing 'to' parameter",
            });
            return;
        }

        const message = await sendMail({ to: req.query.to });
        res.json(message);
    });

    app.get("/health", (req, res) => {
        res.json({ ok: true });
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

main().then(() => {
    // console.log("done");
});
