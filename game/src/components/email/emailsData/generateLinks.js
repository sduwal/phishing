import { Button, Center, Text, Link } from "@chakra-ui/react";

function createRandomLink(link) {}
function createTinyUrl(link) {}

function createConfusion(link) {}
function createhiddenLink(link) {}

export default function generateLinks(email, link) {
    const links = {
        normal: (
            <Center>
                <Link background="transparent" _hover p="0" width="fit-content">
                    https://{link}/hello
                </Link>
            </Center>
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
