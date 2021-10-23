class Email {
    constructor({ to, from, subject, body, name }) {
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.body = body;
        this.name = name;
    }

    generate() {
        return {
            to: this.to,
            from: this.from,
            subject: this.subject,
            body: `${this.body.start} ${this.body.link} ${this.body.end} `
        };
    }
}

export { Email as default };
