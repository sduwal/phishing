// NOTE: When you change the key values in the training data, you need to update the emails too.

// TODO: change this time
export const language = [
    {
        "display": "Spellings",
        "hint": "Train your helper with new vocabulary and spellings. Your attacker will stop making typos after you train him with this skill.",
        "efficiency": 35,
        "time": 0,
        "cost": 1000,
        "value": "spelling",
        "trained":
            "Nicely done! Your attacker will not create any spelling errors anymore."
    },
    {
        "display": "Grammar",
        "efficiency": 35,
        "hint": "Back to basics! Your helper will write emails with better grammar and stop making grammatical errors.",
        "time": 0,
        "cost": 2000,
        "value": "grammar",
        "trained":
            "Good job! Your attacker has improved his grammar and will not make any grammatical errors."
    }
];

export const skills = [
    {
        "efficiency": 20,
        "display": "Styling",
        "hint": "Write better looking emails with better colors, images and headers.",
        "time": 0,
        "cost": 5000,
        "value": "styling",
        "trained":
            "Looking good! Emails will look better visually and more stylish. "
    },
    {
        "efficiency": 20,
        "display": "Links",
        "hint": "Learn new tricks to hide links. Stop giving away the links on the first look.",
        "time": 0,
        "cost": 5000,
        "value": "links",
        "trained":
            "Doing great! You will notice more options to hide links when you create emails!"
    },
    {
        "efficiency": 25,
        "display": "Spoof the sender",
        "hint": "Hide yourself. Pretend to be someone else.",
        "cost": 4000,
        "time": 0,
        "value": "spoof",
        "trained":
            "Nice! New skill! You will be able to send emails as someone else. You will see this option while creating the email."
    },
    {
        "efficiency": 15,
        "display": "Research Targeted group",
        "hint": "Learn how to efficiently research targeted group",
        "cost": 10000,
        "time": 0,
        "value": "research",
        "trained":
            "Wooh! You have learned to find info about users! You can now created targetd emails!"
    }
];
