import a1 from "./generatedEmails/1";

import { Button, Center, Text } from "@chakra-ui/react";

export function generateLinks(email, link) {
    const links = {
        normal: (
            <Button background="transparent" _hover p="0">
                {link}
            </Button>
        ),
        shortner: (
            <Button
                // animation={fadeAnimation}
                background="transparent"
                _hover
                p="0"
            >
                {"https://tinylink.com"}
            </Button>
        ),
        confused: (
            <Center>
                <Button
                    // animation={fadeAnimation}
                    background="transparent"
                    _hover
                    p="0"
                >
                    {"https://randomconfusinglink.com"}
                </Button>
            </Center>
        ),
        hidden: (
            <Center>
                <Button
                    background="blue"
                    width="fit-content"
                    borderRadius="10px"
                    // animation={fadeAnimation}
                >
                    <Text color="white">Click here</Text>
                </Button>
            </Center>
        )
    };
    const body = { ...email.body, link: links };

    const newEmail = {
        ...email,
        body: body,
        from: "contact@" + link
    };
    return { ...newEmail };
}
export default function getRandomEmail(properties, link) {
    if (properties.length === 0) return {};
    return generateLinks(a1.email, link);
}
