// no special properties

import {
    Text,
    Image,
    Divider,
    Box,
    HStack,
    VStack,
    Icon,
    Circle
} from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";

import paypal from "../../../image/paypal.png";

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "We noticed unusual activity in your PayPal account",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} my={2}>
                            We need your help
                        </Text>
                        <Text>
                            {
                                "Your account has been suspended, as an error was detected in your informations. The reason for the error is not certain, but for security reasons, we have suspended your account temporarily."
                            }
                        </Text>

                        <Text mt={3} fontWeight={"bold"}>
                            {
                                "We need you to update your informations for further use of you PayPal account."
                            }
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Text fontWeight={"bold"} my={2}>
                            {"You are currently made disabled of:"}
                        </Text>
                        <HStack spacing={7} my={3}>
                            <Circle border={"1px solid blue"} size={5} p={6}>
                                <Icon
                                    as={AiFillBank}
                                    color={"blue"}
                                    h={"6"}
                                    w={"6"}
                                />
                            </Circle>
                            <VStack align={"start"} px={6}>
                                <Text>{"Adding a payment method"}</Text>
                                <Text>{"Adding a billing address"}</Text>
                            </VStack>

                            <VStack align="start" px={6}>
                                <Text>{"Sending payment"}</Text>
                                <Text>{"Accepting payment"}</Text>
                            </VStack>
                        </HStack>

                        <Box backgroundColor={"blackAlpha.300"} p={4}>
                            <Divider my={2} />
                            <Text fontSize={"0.8em"} opacity={"0.7"}>
                                {
                                    "Please do not reply to this email. We are unable to respond to inquiries sent to this address. For immediate answers to your questions, visit our Help Center by clicking 'Help' located on any PayPal page or email. "
                                }
                            </Text>
                            <Text fontSize={"0.8em"} opacity={"0.7"} my={3}>
                                {
                                    "Copyright © 2022 PayPal,Inc. All rights reserved. PayPal is located at 2211 N. First Street, San Jose, CA 95110. "
                                }
                            </Text>
                        </Box>
                    </>
                ),
                properties: ["spelling", "grammar", "good email"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} my={2}>
                            We need your help
                        </Text>
                        <Text>
                            {
                                "Your account has been suspended, as an errr was detected in your informations. The reason for the error is not certain, but for security reasons, we have suspended your account temporaily."
                            }
                        </Text>

                        <Text mt={3} fontWeight={"bold"}>
                            {
                                "We ned you to update your informations for further use of you PayPal account."
                            }
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Text fontWeight={"bold"} my={2}>
                            {"You are currently made disabled of:"}
                        </Text>
                        <HStack spacing={7} my={3}>
                            <Circle border={"1px solid blue"} size={5} p={6}>
                                <Icon
                                    as={AiFillBank}
                                    color={"blue"}
                                    h={"6"}
                                    w={"6"}
                                />
                            </Circle>
                            <VStack align={"start"} px={6}>
                                <Text>{"Adding a payment method"}</Text>
                                <Text>{"Adding a billing address"}</Text>
                            </VStack>

                            <VStack align="start" px={6}>
                                <Text>{"Sending payment"}</Text>
                                <Text>{"Accepting payment"}</Text>
                            </VStack>
                        </HStack>

                        <Box backgroundColor={"blackAlpha.300"} p={4}>
                            <Divider my={2} />
                            <Text fontSize={"0.8em"} opacity={"0.7"}>
                                {
                                    "Please do not rply to this email. We are unable to respond to inquiries sent to this address. For immediate answers to your questions, visit our Help Center by clicking 'Help' located on any PayPal page or email. "
                                }
                            </Text>
                            <Text fontSize={"0.8em"} opacity={"0.7"} my={3}>
                                {
                                    "Copyright © 2022 PayPal,Inc. All rights reserved. PayPal is located at 2211 N. First Street, San Jose, CA 95110. "
                                }
                            </Text>
                        </Box>
                    </>
                ),
                properties: ["grammar", "good email"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Text fontSize={"2em"} color={"blue.300"} my={2}>
                            We need your help
                        </Text>
                        <Text>
                            {
                                "Your account has been suspended, as an errr was detected in your informations. The reason for the error is not certain, but for security reasons, we have suspended your account temporaily."
                            }
                        </Text>

                        <Text mt={3} fontWeight={"bold"}>
                            {
                                "We ned you to update your informations for further use of you PayPal account."
                            }
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Text fontWeight={"bold"} my={2}>
                            {"You are currently made disabled of:"}
                        </Text>
                        <HStack spacing={7} my={3}>
                            <Circle border={"1px solid blue"} size={5} p={6}>
                                <Icon
                                    as={AiFillBank}
                                    color={"blue"}
                                    h={"6"}
                                    w={"6"}
                                />
                            </Circle>
                            <VStack align={"start"} px={6}>
                                <Text>{"Adding a payment method"}</Text>
                                <Text>{"Adding a billing address"}</Text>
                            </VStack>

                            <VStack align="start" px={6}>
                                <Text>{"Sending payment"}</Text>
                                <Text>{"Accepting payment"}</Text>
                            </VStack>
                        </HStack>
                    </>
                ),
                properties: ["grammar"]
            }
        ]
    }
};

export default {
    email: email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "generic",
    styled: true
};
