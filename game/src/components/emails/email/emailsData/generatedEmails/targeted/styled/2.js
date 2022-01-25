// no special properties

import { Text, HStack, VStack } from "@chakra-ui/react";

import Footer from "./footer";
import Logo from "./logo";

const first = {
    start: (
        <>
            <Logo />
            <Text fontSize={"2em"} color={"blue.300"} my={2}>
                Is this you?
            </Text>
            <Text fontWeight={"bold"}>Good morning, David!</Text>
            <Text>
                {
                    "We've limited your account, because your account was recently logged into from a new device."
                }
            </Text>
            <HStack align={"start"} py={3} spacing={3}>
                <Text> {"Browser"}</Text>
                <VStack align={"start"} fontWeight={"semibold"}>
                    <Text> Mozilla Firefox/5.0 (Windows NT 6.1)</Text>
                    <Text>Gecko/20100101 Firefox 29.0</Text>
                </VStack>
            </HStack>

            <Text mt={3}>
                {
                    "If this is not you, please login to your account and update your security settings:"
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text>
                If you have any concerns, please reach out to us using the
                contact page through the website.
            </Text>
            <Footer />
        </>
    ),
    properties: ["spelling", "grammar", "good email"]
};

const second = {
    start: (
        <>
            <Logo />
            <Text fontSize={"2em"} color={"blue.300"} my={2}>
                Is this you?
            </Text>
            <Text>
                {
                    "We've limited your account, because your account was recently logged into from a new device."
                }
            </Text>
            <HStack align={"start"} py={3} spacing={3}>
                <Text> {"Browser"}</Text>
                <VStack align={"start"} fontWeight={"semibold"}>
                    <Text> Mozilla Firefox/5.0 (Windows NT 6.1)</Text>
                    <Text>Gecko/20100101 Firefox 29.0</Text>
                </VStack>
            </HStack>

            <Text mt={3}>
                {
                    "If this is not you, please login to your account and update your security settings:"
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text>
                If you have any concerns, please reach out to us using the
                contact page through the website.
            </Text>
        </>
    ),
    properties: ["spelling", "grammar"]
};

const third = {
    start: (
        <>
            <Logo />
            <Text fontSize={"2em"} color={"blue.300"} my={2}>
                Is this you?
            </Text>
            <Text fontWeight={"bold"}>Good morning, David!</Text>
            <Text>
                {
                    "we've limited your account, because your account was recently logged into from a new device."
                }
            </Text>
            <HStack align={"start"} py={3} spacing={3}>
                <Text> {"Browser"}</Text>
                <VStack align={"start"} fontWeight={"semibold"}>
                    <Text> mozilla firefox/5.0 (windows nt 6.1)</Text>
                    <Text>gecko/20100101 firefox 29.0</Text>
                </VStack>
            </HStack>

            <Text mt={3}>
                {
                    "if this is not you, please login to your account and update your security settings:"
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text>
                If you have any concerns, please reach out to us using the
                contact page through the website.
            </Text>
            <Footer />
        </>
    ),
    properties: ["spelling", "good email"]
};
const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@randomDomain.com",
    subject: "Is this you?",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "targeted",
    styled: true
};
