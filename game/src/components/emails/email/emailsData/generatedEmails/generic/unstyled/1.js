// no special properties

import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Some info on your account appears to be missing or incorrect. Please update your information promptly so that you can continue to enjoy all the benefits of your account. If you don't update your information within 2 days, we'll close your account."
    ];
    const end = ["New Resolve Limitation:"];

    const allStart = [start];
    const allEnd = [end];

    if (!spelling || !grammar) {
        const copyStart = [...start];
        const copyEnd = [...end];

        if (!spelling && !grammar) {
            allStart.push(...spellingAndGrammarErrors(copyStart));
            allEnd.push(...spellingAndGrammarErrors(copyEnd));
        } else if (!spelling) {
            allStart.push(...spellingErrors(copyStart));
            allEnd.push(...spellingErrors(copyEnd));
        } else if (!grammar) {
            allStart.push(...grammarErrors(copyStart));
            allEnd.push(...grammarErrors(copyEnd));
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
        let endIndex = 0;

        const currentStart = allStart[i];
        const currentEnd = allEnd[i];

        text.push({
            start: (
                <>
                    <Text>Dear Client,</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: <Text>{currentEnd[endIndex++]} 7</Text>,
            properties: properties
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "someone@gmail.com",
        subject: "We noticed unusual activity in your PayPal account",
        totalSend: 1000,
        body: {
            text: text
        },
        targeted: "generic",
        styled: false
    };
}
