import { targetedEmails } from "./level1";

export default function getRandomEmails(
    targeted = false,
    group = false,
    individual = true,
    level = 1
) {
    if (targeted) {
        return targetedEmails[
            Math.floor(Math.random() * targetedEmails.length)
        ];
    }

    if (group) {
        return groupEmails[Math.floor(Math.random() * groupEmails.length)];
    }

    if (individual) {
        return generalEmails[Math.floor(Math.random() * generalEmails.length)];
    }
}
