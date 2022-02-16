import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Your password '1zbnjnx39n' has recently been found in one of the data breaches. Please update your password as soon as possible by clicking on the link below or by visiting the PayPal website."
    ];

    const allStart = [start];

    if (!spelling || !grammar) {
        const copyStart = [...start];

        if (!spelling && !grammar) {
            allStart.push(...spellingAndGrammarErrors(copyStart));
        } else if (!spelling) {
            allStart.push(...spellingErrors(copyStart));
        } else if (!grammar) {
            allStart.push(...grammarErrors(copyStart));
        }
    }

    const text = [];

    for (let i = 0; i < allStart.length; i++) {
        const properties = [];
        if (i == 0) properties.push(...["spelling", "grammar"]);
        if (spelling && !properties.includes(spelling)) {
            properties.push("spelling");
        }
        if (grammar && !properties.includes(grammar)) {
            properties.push("grammar");
        }

        let startIndex = 0;

        const currentStart = allStart[i];

        text.push({
            start: (
                <>
                    <Text>Hello Frank Page,</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text>PayPal Inc.</Text>
                </>
            ),
            properties
        });
    }

    return {
        to: "frankpage@gmail.com",
        from: "someone@gmail.com",
        subject: "IMPORTANT: Your PayPal Password Has Been Found",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "targeted",
        styled: false
    };
}
