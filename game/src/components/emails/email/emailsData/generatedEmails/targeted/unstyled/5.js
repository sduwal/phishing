import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "This email confirms that your order has shipped to the following address: ",
        "If you have any issues with the shipping please contact us:"
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
                    <Text>{"Dear David,"}</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text>{"123 Main St."}</Text>
                    <Text>{"New York, NY 10001"}</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text>Regards</Text>
                    <Text>Paypal Inc</Text>
                </>
            ),
            properties
        });
    }
    return {
        to: "david@gmail.com",
        from: "someone@gmail.com",
        subject: "PayPal Account Removal",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "targeted",
        styled: false
    };
}
