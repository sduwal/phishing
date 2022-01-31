// no special properties

import {
    Text,
    Image,
    Divider,
    Box,
    HStack,
    VStack,
    Center
} from "@chakra-ui/react";

import paypal from "../../../image/paypal.png";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createEmail(spelling, grammar) {
    const start = [
        "You've got cash!",
        "This email confirms that you have received a payment.",
        "The number above is the buyer's receipt ID for this transaction. Please retain it for your records so that you will be able to reference this transaction for customer service.",
        "Click the link below to view more details:"
    ];
    const end = [
        "Have you lifted your withdrawal and receiving limits? Just log in to your PayPal account and click View Limits on the Account Overview page."
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
                    <Text>{currentStart[startIndex++]}</Text>

                    <Box width={"100%"} backgroundColor={"yellow.100"} my={"3"}>
                        <Center>
                            <Text>Receipt ID: 21314123</Text>
                        </Center>
                    </Box>
                    <Divider variant={"dashed"} my={2} />
                    <Text>{currentStart[startIndex++]}</Text>
                    <Divider variant={"dashed"} my={2} />
                    <Text fontWeight={"bold"} mb={2}>
                        Payment details
                    </Text>
                    <Box px={10}>
                        <HStack>
                            <VStack align={"start"} spacing={1}>
                                <Text>Total amount:</Text>
                                <Text>Currency:</Text>
                                <Text>Transaction ID:</Text>
                                <Text>Quantity:</Text>
                                <Text>Buyer:</Text>
                            </VStack>

                            <VStack align={"start"} spacing={1}>
                                <Text>$153.00 USD</Text>
                                <Text>US Dollars</Text>
                                <Text> #23543451</Text>
                                <Text>1</Text>
                                <Text>See attached file for full details</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <Divider variant={"dashed"} my={2} />
                    <Divider variant={"dashed"} my={2} />
                    <Text>{currentStart[startIndex++]}</Text>
                </>
            ),
            end: (
                <>
                    <Text>{currentEnd[endIndex++]}</Text>
                    <Box m={8} />
                </>
            ),
            properties
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
