// https://twitter.com/askpaypal/status/1098743714392924160?lang=da
import { Text, VStack } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Jane Gross just sent you money with PayPal. To hlp you protect, we're reviewing this payment.",
        "The Payment Review may take up to 24 hours. When we've completed the review, we'll either clear or cancel the payment. If the payment clears: You my proceed to process the order. To know if you item is covered, check the 'Seller Protection' section of the 'Transaction Details' page and ensure that it states  'Eligible'.",
        "You can click on the link below to review the pament."
    ];
    const end = [
        "You should not ship item until we let you knw that the payment has cleared. We'll send you an email when we complete the review or you can check the Transaction History tab of your PayPal account."
    ];

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
                <VStack spacing={4} align={"start"} fontSize={"1.1em"}>
                    <Text>Hello Miguel Williamson,</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </VStack>
            ),
            end: (
                <>
                    <Text fontSize={"1.1em"}>{currentEnd[endIndex++]}</Text>
                </>
            ),
            properties
        });
    }

    return {
        to: "frankpage@gmail.com",
        from: "someone@gmail.com",
        subject: "IMPORTANT: Review transaction",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "targeted",
        styled: false
    };
}
