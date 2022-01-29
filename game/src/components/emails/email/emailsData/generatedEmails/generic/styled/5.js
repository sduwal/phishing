// no special properties

import {
    Box,
    Image,
    Text,
    Flex,
    Spacer,
    VStack,
    Link,
    Divider,
    HStack
} from "@chakra-ui/react";

import paypal from "../../../image/paypal.png";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createEmail(spelling, grammar) {
    const start = [
        "You sent a payment of $17.66 to Lyft.",
        "It may take a few moments for this transaction to appear in your account.",
        "You haven't entered any instructions.",
        "You have 180 days from the date of the transaction to open a dispute in the resolution center or click the link below."
    ];
    const end = [
        "Please do not reply to this email. This mailbox is not monitored and you will not receive a response. For assistance, log in to your PayPal account and click Help in the top right corner of any PayPal page or please contact us toll free at 1-888-221-1161. You can receive plain text emails instead of HTML emails. To change your Notifications preferences, log in to your account, go to your Profile, and click My settings.",
        "Not sure why you received the email?"
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
                <Box>
                    <Box width="100%" py={2}>
                        <Flex>
                            <Image
                                src={paypal}
                                height={50}
                                mx={10}
                                color={"white"}
                            />
                            <Spacer />
                            <VStack align={"end`"}>
                                <Text>Dec 23, 2021 07:09:04 PST</Text>
                                <Text>Transaction ID: 18W50219KY5300707 </Text>
                            </VStack>
                        </Flex>
                    </Box>

                    <Text fontWeight={"bold"}> Hello,</Text>
                    <Text fontWeight={"bold"} color="orange.400">
                        {currentStart[startIndex++]}
                    </Text>
                    <Text fontWeight={"bold"}>(support@lyft.com)</Text>

                    <Text pt={4} fontSize={"0.8em"}>
                        {currentStart[startIndex++]}
                        <Box pt={3} maxW={"70%"}>
                            <Flex>
                                <VStack align="start">
                                    <Text fontWeight={"bold"}>Merchant</Text>
                                    <Text>Lyft</Text>
                                    <Link color={"blue"}>support@lyft.com</Link>
                                </VStack>
                                <Spacer />
                                <VStack align="start">
                                    <Text fontWeight={"bold"}>
                                        Instruction to merchant
                                    </Text>
                                    <Text>{currentStart[startIndex++]}</Text>
                                </VStack>
                            </Flex>
                        </Box>
                    </Text>
                    <Divider />

                    <Box width={"100%"} align={"end"}>
                        <Text fontSize={"0.8em"} pt="4">
                            Charges will appear on your credit statement as
                            *PAYPAL* LYFT RIDE WED 1*
                        </Text>

                        <Text fontSize={"0.8em"}>
                            Payment sent to support@lyft.com
                        </Text>
                    </Box>
                    <Divider />
                    <Text pt="3" fontWeight={"bold"}>
                        Issue with this transaction?
                    </Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </Box>
            ),
            end: (
                <>
                    <Text fontWeight={"bold"} mt={4}>
                        Questions? Go to the Help Center.
                    </Text>

                    <Text fontSize={"0.8em"} p={4} rounded={"lg"} m={4}>
                        {currentEnd[endIndex++]}
                    </Text>

                    <VStack
                        p={4}
                        my={4}
                        width="100%"
                        align={"start"}
                        spacing={2}
                        backgroundColor={"blackAlpha.400"}
                        fontSize={"0.8em"}
                    >
                        <HStack>
                            <Text>{currentEnd[endIndex++]} </Text>
                            <Text color="blue">Learn More!</Text>
                        </HStack>
                        <Text>
                            Copyright © 1999-2021 PayPal, Inc. All rights
                            reserved. PayPal is located at 2211 N. First St.,
                            San Jose, CA 95131.
                        </Text>
                        <Text>PayPal PPX001066:1.1:f3f938dcf4b5c</Text>
                    </VStack>
                </>
            ),
            properties: ["spelling", "grammar", "good email"]
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "paypal@gmail.com",
        subject: "PayPal Electronic Invoice Notification",
        totalSend: 1000,
        body: {
            text: text
        },
        properties: ["spelling", "grammar", "good email"],
        targeted: "generic",
        styled: true
    };
}
