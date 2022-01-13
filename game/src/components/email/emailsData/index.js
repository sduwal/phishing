import emails from "./generatedEmails";
import generateLinks from "./generateLinks";
export default function getRandomEmail(properties, link, attacker) {
    if (properties.length === 0) return {};

    const filters = properties.reduce((acc, curr) => {
        acc = [...acc, curr.value];
        return acc;
    }, []);

    const languageSkills = attacker.languageSkills.reduce((acc, curr) => {
        acc = [...acc, curr.value];
        return acc;
    }, []);

    const techSkills = attacker.techSkills.reduce((acc, curr) => {
        acc = [...acc, curr.value];
        return acc;
    }, []);

    let required = emails;

    // styled
    if (techSkills.includes("styling")) {
        required = required.filter((email) => email.styled);
    } else {
        required = required.filter((email) => !email.styled);
    }

    // generic or targeted
    if (filters.includes("targeted")) {
        required = required.filter((email) => {
            return email.targeted == "targeted";
        });
    } else {
        required = required.filter((email) => {
            return email.targeted == "generic";
        });
    }

    // filter with properties
    required = required.filter((email) =>
        email.properties.every((property) => languageSkills.includes(property))
    );
    console.log(required);

    // Gets the required email that fulfils all the requirements
    let email = required[Math.floor(Math.random() * required.length)].email;

    /**
     * Once the email is generated perform the following operations to have randomness in the game:
     * 1. The email address might be from the domain name or random domain
     * 2. Fix the links for the email. We will generate different tiny urls, and such for each iteration of email to have variety in the email links
     */
    email = { ...email, name: "Netflix", linkType: "normal" };
    email = changeFrom(email, link);

    return generateLinks(email, link);
}

function changeFrom(email, link) {
    const random = Math.random();
    if (random < 0.5) return email;

    const from = email.to.split("@")[0] + "@" + link;
    return { ...email, from };
}
