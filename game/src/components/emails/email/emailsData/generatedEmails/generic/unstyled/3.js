// no special properties

import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "We are sorry to inform you that you cant access all your PayPal advantages like sending money and purchasing, due to account limitations.",
        "Why my account PayPal is limited?",
        "Because we think that your account is in danger from stealing and unauthorized uses.",
        "What can I do to resolve this issue?",
        " You have to confirm all your account details on our secure server by clicking below and following all the steps."
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
                    <Text>Hello PayPal Customer,</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text fontWeight={"bold"} mt={3}>
                        {currentStart[startIndex++]}
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>

                    <Text fontWeight={"bold"} mt={3}>
                        {currentStart[startIndex++]}
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: <></>,
            properties
        });
    }
    return {
        to: "randomperson123@gmail.com",
        from: "paypal@gmail.com",
        subject: "Paypal notification",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "generic",
        styled: false
    };
}
