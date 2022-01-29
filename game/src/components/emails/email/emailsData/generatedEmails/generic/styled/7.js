import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../../../image/logo.png";
import {
    spellingAndGrammarErrors,
    spellingErrors,
    grammarErrors
} from "../../../utils/generateEmailsData";

export default function createEmail(spelling, grammar) {
    const start = [
        "Looks like you started getting access to buy crypto but didn't finish.",
        "To get access, all you need to do is confirm some account info if you have a Cash or Cash Plus account. This lets us know it's ok to enable the ability to buy, sell, and hold crypto with your account.",
        "If you don't have a Cash or Cash Plus account, you'll be able to sign up for one during your first purchase. Finish setting up:"
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
            "start": (
                <Box
                    rounded={"xl"}
                    p={2}
                    backgroundImage={
                        "linear-gradient(rgba(24, 79, 234, 0.8),rgba(237, 238, 242, 0.8),white)"
                    }
                >
                    <Center>
                        <Box
                            maxW={"90%"}
                            backgroundColor={"white"}
                            pt={4}
                            px={3}
                            rounded={"xl"}
                        >
                            <Center>
                                <Text fontWeight="bold" py={2} fontSize={"2em"}>
                                    Finish getting access to buy crypto on
                                    PayPal
                                </Text>
                            </Center>
                            <VStack spacing={5} align={"start"}>
                                <Text>{currentStart[startIndex++]}</Text>
                                <Text>{currentStart[startIndex++]}</Text>
                                <Text>{currentStart[startIndex++]}</Text>
                            </VStack>
                        </Box>
                    </Center>
                </Box>
            ),
            "end": (
                <Box
                    rounded={"xl"}
                    p={3}
                    paddingBottom={"10"}
                    mt={"10px"}
                    backgroundImage={
                        "linear-gradient(white,rgba(172, 189, 236, 0.4))"
                    }
                >
                    <Center mt={5}>
                        <Image src={logo} height={50} />
                    </Center>
                </Box>
            ),
            "properties": ["spelling", "grammar", "good email"]
        });
    }

    return {
        to: "randomperson123@gmail.com",
        from: "paypal@gmail.com",
        subject: "Finish getting access to buy crypto",
        totalSend: 1000,
        body: {
            text: text
        },
        targeted: "generic",
        styled: true
    };
}
