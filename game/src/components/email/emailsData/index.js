// TODO: randomize the email
// TODO: generate tiny link, confused links and other properties

// import a1 from "./generatedEmails/5";
import a1 from "./generatedEmails/generic/unstyled/7";
// import a1 from "./generatedEmails/generic/styled/1";

import { Button, Center, Text } from "@chakra-ui/react";

function changeFrom(email, link) {
    const random = Math.random();
    if (random < 0.5) return email;

    const from = email.to.split("@")[0] + "@" + link;
    return { ...email, from };
}

export function generateLinks(email, link) {
    const links = {
        normal: (
            <Button background="transparent" _hover p="2">
                https://{link}
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
        body: body
    };
    return { ...newEmail };
}
export default function getRandomEmail(properties, link) {
    if (properties.length === 0) return {};

    let email = a1.email;
    email = { ...email, name: "Netflix", linkType: "normal" };
    email = changeFrom(email, link);

    return generateLinks(email, link);
}
