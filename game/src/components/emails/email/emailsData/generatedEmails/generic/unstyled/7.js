// no special properties

import { Text } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Thank you for using PayPal. This is to inform you that we have received your shipment details, and it has been forwarded to our processing for verification and completion of the payment. Once the shipment details have been fully verified, your PayPal account will notify you of the shipment status. You can check the status of your order by clicking on the link below."
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
                    <Text>Dear Client,</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: <></>,
            properties
        });
    }
    return {
        to: "randomperson123@gmail.com",
        from: "someone@gmail.com",
        subject: "SHIPMENT DETAILS IN VERIFICATION UNIT",
        totalSend: 1000,
        body: { text },
        targeted: "generic",
        styled: false
    };
}
