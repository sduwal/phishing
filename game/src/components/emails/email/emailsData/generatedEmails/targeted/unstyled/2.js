import { Center, Text, VStack } from "@chakra-ui/react";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createMail(spelling, grammar) {
    const start = [
        "This is just a quick confirmation that you added an address in your PayPal account."
    ];
    const end = [
        "It's important to let us know because it helps us make sure no one is getting into your account without your knowledge."
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
                    <Center>
                        <Text fontWeight={"70%"} fontSize={"2em"} pb={4}>
                            You added a new address
                        </Text>
                    </Center>
                    <VStack align={"start"} spacing={4} mb={5}>
                        <Text>{currentStart[startIndex++]}</Text>
                        <Text pt={4}>Here are the details</Text>
                        <Text>Name: Theresa Cannon</Text>
                        <Text>Address updated:</Text>
                        <Text>658 Tepaf Extension</Text>
                        <Text>70149</Text>
                        <Text>New York</Text>
                        <Text>NY</Text>
                    </VStack>

                    <Text>
                        {
                            "If you didn't make this change, let us know right away:"
                        }
                    </Text>
                </>
            ),
            end: <Text>{currentEnd[endIndex++]}</Text>,
            properties
        });
    }

    return {
        to: "theresea1991@gmail.com",
        from: "someone@gmail.com",
        subject: "You added a new address",
        totalSend: 1000,
        body: {
            text
        },
        targeted: "targeted",
        styled: false
    };
}
