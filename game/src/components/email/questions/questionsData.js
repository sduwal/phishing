/* eslint-disable max-len */
const targeted = [
    {
        display: "Generate targeted email",
        hint: "Generate a email targeted to a specific user. This will require some additional time to research specific individual.",
        displayLevel: 1,
        attackerLevel: 3,
        value: "targeted",
        color: "red.100",
        researchTime: 5
    },
    {
        display: "Generate email specific to a group",
        hint: "Generate a email targeted to a specific group. This will require some additional time to research specific group, but will be faster than researching specific individual.",
        displayLevel: 1,
        attackerLevel: 2,
        value: "group",
        color: "green.100",
        researchTime: 3
    },
    {
        display: "Generate a generic email",
        hint: "Generate emajasdha kjsdhaskjdh aksjdh aksjdhaksjdhajksh alksdhsdkjfh alfhakl jsfhaksdh aweyioqhdklash qwoi kszjdhqaodasl haodhaklsdh asdhailsey laskdbnhajksydhjkashdaodhasjkldh qiowalsd aopdlakseh qopwdnakl hqpawdalskeqwpdnal qwopdj pqwodjal ksjopqwdlask;djqopw l;aksjl;il",
        displayLevel: 1,
        attackerLevel: 1,
        value: "generic",
        color: "blue.100",
        researchTime: 1
    }
];

const linkHiding = [
    {
        display: "<a> Tags </a>",
        hint: "<a> Tags </a>",
        displayLevel: 2,
        attackerLevel: 1,
        value: "generic",
        color: "blue.100"
    },
    {
        display: "Shortner",
        hint: "Shortner",
        displayLevel: 2,
        attackerLevel: 1,
        value: "generic",
        color: "red.100"
    },
    {
        display: "Confusion",
        hint: "Shortner",
        displayLevel: 2,
        attackerLevel: 1,
        value: "generic",
        color: "yellow.100"
    },
    {
        display: "None",
        hint: "Shortner",
        displayLevel: 2,
        attackerLevel: 1,
        value: "generic",
        color: "green.100"
    }
];

const spoofing = [
    {
        display: "Spoof email address",
        hint: "Use <a> tags </a> to hide your link behing the text.",
        displayLevel: 3,
        attackerLevel: 3,
        value: "<a>link</a>",
        color: "red.100"
    },
    {
        display: "No Spoof email address",
        hint: "Use <a> tags </a> to hide your link behing the text.",
        displayLevel: 3,
        attackerLevel: 3,
        value: "<a>link</a>",
        color: "green.100"
    }
];

const options = [...targeted, ...linkHiding, ...spoofing];

export { options as default };
