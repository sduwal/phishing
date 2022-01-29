// no special properties

import { Text, Image, Box, Divider } from "@chakra-ui/react";

import paypal from "../../../image/paypal.png";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";
export default function createMail(spelling, grammar) {
    const start = [
        "Your account PayPal is limited. You Have To Solve The Problem In 24 Hours.",
        "We are sorry to inform you that you can't access all your paypal advantages like sending money and purchasing, due to account limitation.",
        "Why my account PayPal is limited?",
        " Because we think that your account is in danger from stealing and unauthorized uses",
        "What can I do yo resolve the problem?",
        "You have to confirm all your account details on our secure server by clicking the link below and following all the steps"
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
                    <Image src={paypal} height={50} />
                    <Box background={"blackAlpha.100"} my={4} py={4}>
                        <Text
                            fontSize={"1.5em"}
                            color={"blue.400"}
                            fontWeight={"bold"}
                        >
                            {currentStart[startIndex++]}
                        </Text>
                    </Box>

                    <Text>{currentStart[startIndex++]}</Text>
                    <Text mt={5} fontWeight={"bold"}>
                        {currentStart[startIndex++]}
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <Text mt={5} fontWeight={"bold"}>
                        {currentStart[startIndex++]}
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: <></>,
            properties: properties
        });
    }
    return {
        to: "randomperson123@gmail.com",
        from: "contact@gmail.com",
        subject: "Account Notification",
        totalSend: 1000,
        body: {
            text: text
        },
        targeted: "generic",
        styled: true
    };
}
// const email =
