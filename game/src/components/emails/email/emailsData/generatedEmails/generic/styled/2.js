// no special properties

import { Text, Image, Box, Divider } from "@chakra-ui/react";

import paypal from "../../../image/paypal.png";
const email = {
    to: "randomperson123@gmail.com",
    from: "contact@gmail.com",
    subject: "Account Notification",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Box background={"blackAlpha.100"} my={4} py={4}>
                            <Text
                                fontSize={"1.5em"}
                                color={"blue.400"}
                                fontWeight={"bold"}
                            >
                                {
                                    "Your account PayPal is limited. You Have To Solve The Problem In 24 Hours."
                                }
                            </Text>
                        </Box>

                        <Text>
                            {
                                "We are sorry to inform you that you can't access all your paypal advantages like sending money and purchasing, due to account limitation."
                            }
                        </Text>
                        <Text mt={5} fontWeight={"bold"}>
                            Why my account PayPal is limited?
                        </Text>
                        <Text>
                            Because we think that your account is in danger from
                            stealing and unauthorized uses
                        </Text>
                        <Text mt={5} fontWeight={"bold"}>
                            What can I do yo resolve the problem?
                        </Text>
                        <Text>
                            You have to confirm all your account details on our
                            secure server by clicking the link below and
                            following all the steps
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Box background={"blackAlpha.100"} my={4} py={4}>
                            <Text
                                fontSize={"1.5em"}
                                color={"blue.400"}
                                fontWeight={"bold"}
                            >
                                {
                                    "Your account PayPal is limited. You Have To Solve The Problem In 24 Hours."
                                }
                            </Text>
                        </Box>

                        <Text>
                            {
                                "We are sorry to inform you that you can't access all your PayPal advantages like sending money and purchasing, due to account limitation."
                            }
                        </Text>
                        <Text mt={5} fontWeight={"bold"}>
                            Why my account PayPal is limited?
                        </Text>
                        <Text>
                            Because we think that your account is in danger from
                            stealing and unauthorized uses.
                        </Text>
                        <Text mt={5} fontWeight={"bold"}>
                            What can I do yo resolve the problem?
                        </Text>
                        <Text>
                            You have to confirm all your account details on our
                            secure server by clicking the link below and
                            following all the steps.
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Image src={paypal} height={50} />
                        <Box background={"blackAlpha.100"} m={2} p={4}>
                            <Text
                                fontSize={"1.5em"}
                                color={"blue.400"}
                                fontWeight={"bold"}
                            >
                                {
                                    "Your acount Paypal is limited. You Have To Solve The Problem In 24 Hours."
                                }
                            </Text>
                        </Box>

                        <Text mt={5} fontWeight={"bold"}>
                            Why my account PayPal limited?
                        </Text>
                        <Text>
                            Because we think that your account in danger from
                            stealing and unauthorized uses.
                        </Text>
                        <Text mt={5} fontWeight={"bold"}>
                            What can I do yo resolve the problem?
                        </Text>
                        <Text>
                            You have to confirm all your account details on our
                            secure server by clicking the link below and
                            following all the steps.
                        </Text>
                    </>
                ),
                end: (
                    <>
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
                properties: []
            }
        ]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar"],
    targeted: "generic",
    styled: true
};
