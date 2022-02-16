import { Text, VStack } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "On June 3, 2021, you removed a card ending in 1841 from your PayPal account.",
        "Any payments you authorized on this card on or before June 3, 2021 will be completed; however, no new payments will be processed on this card. Learn more:"
    ];
    const end = [
        "If you didn't remove this card, log into your PayPal account and review your information as soon as possible. If you notice any unusual activity, please contact us immediately by clicking the Help Center link at the bottom of this email."
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
                <>
                    <Text>Hello Sadie Brock,</Text>
                    <VStack align={"start"} spacing={4}>
                        <Text>{currentStart[startIndex++]}</Text>
                        <Text>{currentStart[startIndex++]}</Text>
                    </VStack>
                </>
            ),
            end: (
                <VStack align={"start"} spacing={4}>
                    <Text>{currentEnd[endIndex++]}</Text>
                    <Text>Thanks,</Text>
                    <Text>PayPal</Text>
                </VStack>
            ),
            properties
        });
    }

    return {
        to: "sbrooke@gmail.com",
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
