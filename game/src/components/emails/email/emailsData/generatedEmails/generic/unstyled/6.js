// no special properties

import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "We've limited access to your account because your account was recently logged into from a new browser.",
        "What do I need to do?",
        "In order to access your account again, you need to verify your identity by following some of our security steps. Use the link below:"
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
                    <Text fontWeight={"bold"} my={2}>
                        {"Was that you?"}
                    </Text>

                    <Text my={2}>
                        {"- Browser: Mozilla/5.0 (Windows NT 6.1; rv: 29.0)"}
                    </Text>

                    <Text fontWeight={"bold"} my={2}>
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
        to: "jane_doe@gmail.com",
        from: "customerservice@gmail.com",
        subject: "Your account is on hold #62378957",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "generic",
        styled: false
    };
}
