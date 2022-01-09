// no special properties

import {
    Text,
    Image,
    Divider,
    Box,
    HStack,
    VStack,
    Icon,
    Circle,
    UnorderedList,
    ListItem,
    Link
} from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";

import paypal from "../../../image/paypal.png";

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "Welcome to PayPal",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                            Welcome to PayPal!
                        </Text>
                        <Text>{"Hello Reply Guy,"}</Text>
                        <Text>
                            {
                                "To start using your PayPal account, all you have to do is confirm your email address."
                            }
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Box backgroundColor={"blue.100"} p={4}>
                            <Text fontWeight={"bold"}>Start using PayPal</Text>
                            <UnorderedList px={4}>
                                <ListItem>
                                    {" "}
                                    Shop on eBay and at thousands of online
                                    stores that accept PayPal
                                </ListItem>
                                <ListItem>
                                    {
                                        "Speed through checkout with just your email and PayPal password. No more entering your personal information."
                                    }
                                </ListItem>
                                <ListItem>
                                    Send money to anyone with an email address.
                                </ListItem>
                            </UnorderedList>
                            <Text>
                                Learn more about{" "}
                                <Link color={"blue"}>
                                    how to use your PayPal account.
                                </Link>
                            </Text>
                        </Box>
                        <Text mt={2}>Sincerely,</Text>
                        <Text>PayPal</Text>
                    </>
                ),
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                            Welcome to paypal!
                        </Text>
                        <Text>{"Hello Reply Guy,"}</Text>
                        <Text>
                            {
                                "to start using your paypal account, all you have to do is cofirm your email address."
                            }
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Box backgroundColor={"blue.100"} p={4}>
                            <Text fontWeight={"bold"}>Start using paypal</Text>
                            <UnorderedList px={4}>
                                <ListItem>
                                    {" "}
                                    Shop on eBay and at thousands of online
                                    stores that accept paypal
                                </ListItem>
                                <ListItem>
                                    {
                                        "speed through checkot with just your email and paypal password. No more entering your personal information."
                                    }
                                </ListItem>
                                <ListItem>
                                    Send money to anyone with an email address.
                                </ListItem>
                            </UnorderedList>
                            <Text>
                                Learn more about{" "}
                                <Link color={"blue"}>
                                    how to use your paypal account.
                                </Link>
                            </Text>
                        </Box>
                        <Text mt={2}>Sincerely,</Text>
                        <Text>paypal</Text>
                    </>
                ),
                properties: []
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} mt={2}>
                            Welcome to Paypal!
                        </Text>
                        <Text>{"Hello Reply Guy,"}</Text>
                        <Text>
                            {
                                "to start using your Paypal account, all you have to do is confirm your email address."
                            }
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Box backgroundColor={"blue.100"} p={4}>
                            <Text fontWeight={"bold"}>Start using PayPal</Text>
                            <UnorderedList px={4}>
                                <ListItem>
                                    {" "}
                                    Shop on eBay and at thousands of online
                                    stores that accept Paypal
                                </ListItem>
                                <ListItem>
                                    {
                                        "speed through checkout with just your email and PayPal password. No more entering your personal information."
                                    }
                                </ListItem>
                                <ListItem>
                                    Send money to anyone with an email address.
                                </ListItem>
                            </UnorderedList>
                            <Text>
                                Learn more about{" "}
                                <Link color={"blue"}>
                                    how to use your PayPal account.
                                </Link>
                            </Text>
                        </Box>
                        <Text mt={2}>Sincerely,</Text>
                        <Text>PayPal</Text>
                    </>
                ),
                properties: ["spelling"]
            }
        ]
    }
};

export default {
    email: email,
    properties: [],
    targeted: "generic",
    styled: true
};
