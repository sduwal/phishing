// no special properties

import {
    Text,
    Image,
    Box,
    UnorderedList,
    ListItem,
    Link
} from "@chakra-ui/react";

import paypal from "../../../image/paypal.png";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createEmail(spelling, grammar) {
    const start = [
        "Welcome to PayPal!",
        "Hello Reply Guy,",
        "To start using your PayPal account, all you have to do is confirm your email address."
    ];
    const end = [
        "Start using PayPal",
        "Shop on eBay and at thousands of online stores that accept PayPal",
        "Speed through checkout with just your email and PayPal password. No more entering your personal information.",
        "Send money to anyone with an email address.",
        "Learn more about",
        " how to use your PayPal account.",
        "Sincerely,",
        "PayPal"
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
                    <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                        {currentStart[startIndex++]}
                    </Text>
                    <Text> {currentStart[startIndex++]}</Text>
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Box backgroundColor={"blue.100"} p={4}>
                        <Text fontWeight={"bold"}>
                            {currentEnd[endIndex++]}
                        </Text>
                        <UnorderedList px={4}>
                            <ListItem>{currentEnd[endIndex++]}</ListItem>
                            <ListItem>{currentEnd[endIndex++]}</ListItem>
                            <ListItem>{currentEnd[endIndex++]}</ListItem>
                        </UnorderedList>
                        <Text>
                            <ListItem>{currentEnd[endIndex++]}</ListItem>
                            <Link color={"blue"}>
                                <ListItem>{currentEnd[endIndex++]}</ListItem>
                            </Link>
                        </Text>
                    </Box>
                    <Text mt={2}>{currentEnd[endIndex++]}</Text>
                    <Text>{currentEnd[endIndex++]}</Text>
                </>
            ),
            properties: [properties]
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "paypal@gmail.com",
        subject: "Welcome to PayPal",
        totalSend: 1000,
        body: {
            text: text
        },
        properties: [],
        targeted: "generic",
        styled: true
    };
}
// export {
//     ...email,
//     properties: [],
//     targeted: "generic",
//     styled: true
// };
