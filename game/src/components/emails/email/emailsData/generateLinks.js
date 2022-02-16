import {
    Button,
    Center,
    Text,
    Link,
    HStack,
    Container,
    Tooltip
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

function createRandomLink(link) {
    const options = [
        nanoid(6),
        nanoid(12),
        nanoid(18),
        nanoid(10),
        nanoid(11),
        nanoid(),
        nanoid(),
        nanoid(),
        nanoid(),
        "help",
        "paypal-help-website",
        "",
        "whats-my-next-step"
    ];
    const generated = options[Math.round(Math.random() * options.length)];
    return (
        <Tooltip label={`https://${link}`}>
            <HStack spacing={0}>
                <Text opacity={0.5}>https://</Text>
                <Text>{`${link}`}</Text>
                <Text opacity={0.5}>/{generated}</Text>
            </HStack>
        </Tooltip>
    );
}
function createTinyUrl(link) {
    const service = [
        "tinyurl",
        "bit.ly",
        "is.gd",
        "tiny.cc",
        "rb.gy",
        "bl.ink",
        "shortcm.xyz"
    ];
    const randomService = service[Math.round(Math.random() * service.length)];

    const randomID = nanoid(Math.round(Math.random() * 5) + 8);
    return (
        <HStack spacing={0}>
            <Text opacity={0.5}>https://</Text>
            <Text>{randomService}</Text>
            <Text opacity={0.5}>/{randomID}</Text>
        </HStack>
    );
}

function createConfusion(link) {
    const options = [
        `https://paypal.com-help.${link}`,
        `https://paypal.com-help.${link}/${nanoid(6)}`,
        `https://paypal.${link}`
    ];

    return options[Math.floor(Math.random() * options.length)];
}
function createHiddenLink(link) {
    const buttonOptions = [
        "Go to PayPal",
        "Click here",
        "Click here for help",
        "PayPal help"
    ];
    const button = (
        <Tooltip label={`https://${link}`}>
            <Button backgroundColor={"blue.400"} _hover={{}} color="white">
                {
                    buttonOptions[
                        Math.floor(Math.random() * buttonOptions.length)
                    ]
                }
            </Button>
        </Tooltip>
    );

    const aTagOptions = [
        "http://www.paypal.com",
        "http://www.paypal.com/help",
        "Click here!",
        "https://www.paypal.com/login",
        "Go to PayPal"
    ];
    const aTag = (
        <Tooltip label={`https://${link}`}>
            <Link target={link}>
                {aTagOptions[Math.round(Math.random() * aTagOptions.length)]}
            </Link>
        </Tooltip>
    );
    return Math.random() > 0.5 ? button : aTag;
}

export default function generateLinks(link) {
    const links = {
        normal: (
            <Center>
                <Link p="0" width="fit-content">
                    {createRandomLink(link)}
                </Link>
            </Center>
        ),
        shortner: (
            <Center>
                <Link p="0">{createTinyUrl(link)}</Link>
            </Center>
        ),
        confused: (
            <Center>
                <Container width={"100%"}>
                    <Link p="0">{createConfusion(link)}</Link>
                </Container>
            </Center>
        ),
        hidden: <Center>{createHiddenLink(link)}</Center>
    };
    return links;
}
