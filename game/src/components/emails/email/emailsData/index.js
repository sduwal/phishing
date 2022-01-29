export default function getRandomEmail({ emails, properties, link, attacker }) {
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

    let required = [];

    // styled
    if (techSkills.includes("styling")) {
        required = Object.keys(emails).filter((key) => emails[key].styled);
    } else {
        required = Object.keys(emails).filter((key) => !emails[key].styled);
    }

    // generic or targeted
    if (filters.includes("targeted")) {
        required = required.filter((key) => emails[key].targeted == "targeted");
    } else {
        required = required.filter((key) => emails[key].targeted == "generic");
    }

    // filter with properties
    required = required.filter((key) =>
        emails[key].properties.every((property) =>
            languageSkills.includes(property)
        )
    );

    // get rid of the really obvious bad emails
    if (languageSkills.length >= 2) {
        required = required.filter((key) => emails[key].properties.length != 0);
    }

    // Gets the required email that fulfils all the requirements
    let requiredKey = required[Math.floor(Math.random() * required.length)];

    /**
     * Once the email is generated perform the following operations to have randomness in the game:
     * 1. The email address might be from the domain name or random domain
     * 2. Fix the links for the email. We will generate different tiny urls, and such for each iteration of email to have variety in the email links
     */
    // TODO: remove this line after completion of test
    requiredKey = Object.keys(emails)[0];
    changeFrom({ emails, key: requiredKey, link });
    return requiredKey;
}

function changeFrom({ emails, key, link }) {
    const random = Math.random();
    if (random < 0.5) return emails;

    const currentEmail = emails[key];
    currentEmail.from = currentEmail.from.split("@")[0] + "@" + link;

    return { ...emails, currentEmail };
}
