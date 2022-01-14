/* eslint-disable max-len */
const targeted = [
    {
        display: "Generate Targeted Emails",
        hint: "Generate email targeted to a specific group of users. This will take a while, but will generate personalized emails (maybe name, address, etc).",
        displayLevel: 1,
        value: "group",
        color: "green.100",
        researchTime: 10,
        requirement: ["Research Targeted group"]
    },
    {
        display: "Generate a generic email",
        hint: "Generate a generic email that might be valid for large group of individual.",
        displayLevel: 1,
        value: "generic",
        color: "blue.100",
        researchTime: 3
    }
];

const linkHiding = [
    {
        display: "Hide Links",
        hint: "Hide the link under button or text.",
        displayLevel: 2,
        value: "hidden",
        color: "blue.100",
        requirement: ["Links"]
    },
    {
        display: "Shortner",
        hint: "Use link shortner service to hide the link.",
        displayLevel: 2,
        value: "shortner",
        color: "red.100",
        requirement: ["Links"]
    },
    {
        display: "Confusion",
        hint: "Confuse the user with a link that redirects to a different page.",
        displayLevel: 2,
        value: "confused",
        requirement: ["Links"],
        color: "yellow.100"
    },
    {
        display: "None",
        hint: "Display the link as is.",
        displayLevel: 2,
        attackerLevel: 1,
        value: "normal",
        color: "green.100"
    }
];

const spoofing = [
    {
        display: "Spoof email address",
        hint: "Use <a> tags </a> to hide your link behing the text.",
        displayLevel: 3,
        attackerLevel: 3,
        value: true,
        color: "red.100"
    },
    {
        display: "No Spoof email address",
        hint: "Use <a> tags </a> to hide your link behing the text.",
        displayLevel: 3,
        attackerLevel: 3,
        value: false,
        color: "green.100"
    }
];

const options = [...targeted, ...linkHiding, ...spoofing];

export { options as default };
