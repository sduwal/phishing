// all
// no special properties

import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Your Paypal account has been limited because we've noticed significant changes in your account activity. As your payment processor, we need to understand these changes better.",
        "This account limitation will affect your ability to:",
        "Send or receive money",
        "Withdraw money from your account",
        "Add or remove a card & bank account",
        "Dispute a transaction",
        "Close your account",
        "What to do next?"
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
                    <Text fontWeight={"bold"}>{"Dear Customer Service"}</Text>

                    <Text my="3">{currentStart[startIndex++]}</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Box mx={5}>
                        <UnorderedList>
                            <ListItem>{currentStart[startIndex++]}</ListItem>
                            <ListItem>{currentStart[startIndex++]}</ListItem>
                            <ListItem>{currentStart[startIndex++]}</ListItem>
                            <ListItem>{currentStart[startIndex++]}</ListItem>
                            <ListItem>{currentStart[startIndex++]}</ListItem>
                        </UnorderedList>
                    </Box>

                    <Text my={3} fontWeight={"bold"}>
                        {currentStart[startIndex++]}
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text>Thank you for understanding and coopertaion. </Text>
                    <Text>Sincerly,</Text>
                    <Text>PayPal Inc.</Text>
                </>
            ),
            properties
        });
    }
    return {
        to: "randomperson123@gmail.com",
        from: "paypl@gmail.com",
        subject: "PayPal notification",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "generic",
        styled: false
    };
}
