import Email from "./email";

class PersonalizedEmail extends Email {
    constructor(to, subject, body, from) {
        super(to, subject, body, from);
    }
}

export default PersonalizedEmail;
