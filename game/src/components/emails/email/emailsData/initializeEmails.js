import emails from "./generatedEmails";
import generateLinks from "./generateLinks";
import { nanoid } from "nanoid";

export default function initializeEmails(link, attacker) {
    const skills = attacker.languageSkills.map((skill) => skill.value);
    const emailsWithLinks = {};

    emails(skills.includes("spelling"), skills.includes("grammar")).forEach(
        (email) => {
            const links = generateLinks(link);
            const body = { ...email.body, link: links };
            const key = nanoid(6);
            return (emailsWithLinks[key] = {
                ...email,
                body,
                "linkType": "normal"
            });
        }
    );

    return emailsWithLinks;
}
