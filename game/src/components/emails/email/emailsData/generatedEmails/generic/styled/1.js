// no special properties

import {
    Text,
    Image,
    Divider,
    Box,
    HStack,
    VStack,
    Icon,
    Circle
} from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";

import paypal from "../../../image/paypal.png";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "Your account has been suspended, as an error was detected in your informations. The reason for the error is not certain, but for security reasons, we have suspended your account temporarily.",
        "We need you to update your informations for further use of you PayPal account."
    ];
    const end = [
        "You are currently made disabled of:",
        "Adding a payment method",
        "Adding a billing address",
        "Sending payment",
        "Accepting payment"
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
                    <Image src={paypal} height={50} />
                    <Text fontSize={"2em"} color={"blue.300"} my={2}>
                        We need your help
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>

                    <Text mt={3} fontWeight={"bold"}>
                        {currentStart[startIndex++]}
                    </Text>
                </>
            ),
            end: (
                <>
                    <Text fontWeight={"bold"} my={2}>
                        {currentEnd[endIndex++]}
                    </Text>
                    <HStack spacing={7} my={3}>
                        <Circle border={"1px solid blue"} size={5} p={6}>
                            <Icon
                                as={AiFillBank}
                                color={"blue"}
                                h={"6"}
                                w={"6"}
                            />
                        </Circle>
                        <VStack align={"start"} px={6}>
                            <Text> {currentEnd[endIndex++]}</Text>
                            <Text> {currentEnd[endIndex++]}</Text>
                        </VStack>

                        <VStack align="start" px={6}>
                            <Text> {currentEnd[endIndex++]}</Text>
                            <Text> {currentEnd[endIndex++]}</Text>
                        </VStack>
                    </HStack>

                    <Box backgroundColor={"blackAlpha.300"} p={4}>
                        <Divider my={2} />
                        <Text fontSize={"0.8em"} opacity={"0.7"}>
                            {currentEnd[endIndex++]}
                        </Text>
                        <Text fontSize={"0.8em"} opacity={"0.7"} my={3}>
                            {
                                "Copyright © 2022 PayPal,Inc. All rights reserved. PayPal is located at 2211 N. First Street, San Jose, CA 95110. "
                            }
                        </Text>
                    </Box>
                </>
            ),
            properties: properties
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "paypal@gmail.com",
        subject: "We noticed unusual activity in your PayPal account",
        totalSend: 1000,
        body: {
            text: text
        },
        properties: ["spelling", "grammar", "good email"],
        targeted: "generic",
        styled: true
    };
}
