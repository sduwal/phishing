// no special properties

import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Paypal: We've noticed some unusual activity on your account. For your protection, your PayPal account is now limited. To restore access, please visit the secure link provided and complete the steps necessary: "
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
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: <></>,
            properties
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "john_paypal@gmail.com",
        subject: "Paypal notification",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "generic",
        styled: false
    };
}
