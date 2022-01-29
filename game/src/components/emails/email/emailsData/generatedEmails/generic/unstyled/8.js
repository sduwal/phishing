// no special properties

import { Box, Text } from "@chakra-ui/react";

import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "This email confirms that you have cancelled your billing agreement with Hulu. No further payments will be made from your PayPal account to this merchant. If you have any further questions about the agreement, or wish to reinstate it, please contact Hulu directly. Learn more:"
    ];
    const end = [
        "Copyright © 1999-2021 PayPal, Inc. All rights reserved. PayPal is located at 2211 N. First St., San Jose, CA 95131."
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
                    <Text py={2}>Hello,</Text>
                    <Text lineHeight={1.4}>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text pt={3}>Sincerly,</Text>
                    <Text py={4}>PayPal</Text>
                    <Box lineHeight={1.5} fontSize={"0.9em"}>
                        <Text>{"Not sure why you received this email?"}</Text>
                        <Text>{"Learn more"}</Text>
                        <Text color={"blue"} decoration={"underline"}>
                            {
                                "https://www.paypal.com/us/smarthelp/articlewhy-am-i-receiving-emails-from-paypal-when-i-dont-have-an-account-faq4172"
                            }
                        </Text>
                        <Text>{currentEnd[endIndex++]}</Text>
                        <Text mt={6}>PayPal PPX000771:N/A:f2225892a3283</Text>
                    </Box>
                </>
            ),
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
