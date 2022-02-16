// no special properties

import { Text, HStack, VStack } from "@chakra-ui/react";

import Footer from "./footer";
import Logo from "./logo";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "We've limited your account, because your account was recently logged into from a new device.",
        "If this is not you, please login to your account and update your security settings:"
    ];
    const end = [
        "If you have any concerns, please reach out to us using the contact page through the website."
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
                    <Logo />
                    <Text fontSize={"2em"} color={"blue.300"} my={2}>
                        Is this you?
                    </Text>
                    <Text fontWeight={"bold"}>Good morning, David!</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                    <HStack align={"start"} py={3} spacing={3}>
                        <Text> {"Browser"}</Text>
                        <VStack align={"start"} fontWeight={"semibold"}>
                            <Text> Mozilla Firefox/5.0 (Windows NT 6.1)</Text>
                            <Text>Gecko/20100101 Firefox 29.0</Text>
                        </VStack>
                    </HStack>

                    <Text mt={3}>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text>{currentEnd[endIndex++]}</Text>
                    <Footer />
                </>
            ),
            properties
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "paypal@randomDomain.com",
        subject: "Is this you?",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "targeted",
        styled: true
    };
}
