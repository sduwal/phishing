// no special properties

import {
    Box,
    Center,
    Image,
    Text,
    Flex,
    Spacer,
    VStack,
    Link,
    Divider,
    HStack
} from "@chakra-ui/react";

import paypal from "../../../image/paypal.png";

const good = {
    start: (
        <Box>
            <Box width="100%" py={2}>
                <Flex>
                    <Image src={paypal} height={50} mx={10} color={"white"} />
                    <Spacer />
                    <VStack align={"end`"}>
                        <Text>Dec 23, 2021 07:09:04 PST</Text>
                        <Text>Transaction ID: 18W50219KY5300707 </Text>
                    </VStack>
                </Flex>
            </Box>

            <Text fontWeight={"bold"}> Hello,</Text>
            <Text fontWeight={"bold"} color="orange.400">
                You sent a payment of $17.66 to Lyft.
            </Text>
            <Text fontWeight={"bold"}>(support@lyft.com)</Text>

            <Text pt={4} fontSize={"0.8em"}>
                It may take a few moments for this transaction to appear in your
                account.
                <Box pt={3} maxW={"70%"}>
                    <Flex>
                        <VStack align="start">
                            <Text fontWeight={"bold"}>Merchant</Text>
                            <Text>Lyft</Text>
                            <Link color={"blue"}>support@lyft.com</Link>
                        </VStack>
                        <Spacer />
                        <VStack align="start">
                            <Text fontWeight={"bold"}>
                                Instruction to merchant
                            </Text>
                            <Text>
                                {"You haven't entered any instructions."}
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </Text>
            <Divider />

            <Box width={"100%"} align={"end"}>
                <Text fontSize={"0.8em"} pt="4">
                    Charges will appear on your credit statement as *PAYPAL*
                    LYFT RIDE WED 1*
                </Text>

                <Text fontSize={"0.8em"}>Payment sent to support@lyft.com</Text>
            </Box>
            <Divider />
            <Text pt="3" fontWeight={"bold"}>
                Issue with this transaction?
            </Text>
            <Text>
                You have 180 days from the date of the transaction to open a
                dispute in the resolution center or click the link below.
            </Text>
        </Box>
    ),
    end: (
        <>
            <Text fontWeight={"bold"} mt={4}>
                Questions? Go to the Help Center.
            </Text>

            <Text fontSize={"0.8em"} p={4} rounded={"lg"} m={4}>
                {
                    "Please do not reply to this email. This mailbox is not monitored and you will not receive a response. For assistance, log in to your PayPal account and click Help in the top right corner of any PayPal page or please contact us toll free at 1-888-221-1161. You can receive plain text emails instead of HTML emails. To change your Notifications preferences, log in to your account, go to your Profile, and click My settings."
                }
            </Text>

            <VStack
                p={4}
                my={4}
                width="100%"
                align={"start"}
                spacing={2}
                backgroundColor={"blackAlpha.400"}
                fontSize={"0.8em"}
            >
                <HStack>
                    <Text>Not sure why you received the email? </Text>
                    <Text color="blue">Learn More!</Text>
                </HStack>
                <Text>
                    Copyright © 1999-2021 PayPal, Inc. All rights reserved.
                    PayPal is located at 2211 N. First St., San Jose, CA 95131.
                </Text>
                <Text>PayPal PPX001066:1.1:f3f938dcf4b5c</Text>
            </VStack>
        </>
    ),
    properties: ["spelling", "grammar", "good email"]
};

const secondWithSpelling = {
    start: (
        <Box>
            <Box width="100%" py={2}>
                <Flex>
                    <Image src={paypal} height={50} mx={10} color={"white"} />
                    <Spacer />
                    <VStack align={"end`"}>
                        <Text>Dec 23, 2021 07:09:04 PST</Text>
                        <Text>Transacon ID: 18W50219KY5300707 </Text>
                    </VStack>
                </Flex>
            </Box>

            <Text fontWeight={"bold"}> Hello,</Text>
            <Text fontWeight={"bold"} color="orange.400">
                You sent a pyment of $17.66 to lyft.
            </Text>
            <Text fontWeight={"bold"}>(support@lyft.com)</Text>

            <Text pt={4} fontSize={"0.8em"}>
                It may take a few moments for this transaction to appear in your
                account.
                <Box pt={3} maxW={"70%"}>
                    <Flex>
                        <VStack align="start">
                            <Text fontWeight={"bold"}>Merchant</Text>
                            <Text>Lyft</Text>
                            <Link color={"blue"}>support@lyft.com</Link>
                        </VStack>
                        <Spacer />
                        <VStack align="start">
                            <Text fontWeight={"bold"}>
                                Instruction to merchant
                            </Text>
                            <Text>
                                {"You haven't enterd any instructions."}
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </Text>
            <Divider />

            <Box width={"100%"} align={"end"}>
                <Text fontSize={"0.8em"} pt="4">
                    Charges will appear on your credit statement as *PAYPAL*
                    LYFT RIDE WED 1*
                </Text>

                <Text fontSize={"0.8em"}>Payment sent to support@lyft.com</Text>
            </Box>
            <Divider />
            <Text pt="3" fontWeight={"bold"}>
                Issue with this transaction?
            </Text>
            <Text>
                You have 180 days fro the date of the transaction to open a
                dispute in the resolution center or click the link below.
            </Text>
        </Box>
    ),
    end: (
        <>
            <Text fontWeight={"bold"} mt={4}>
                Questions? Go to the Help Center.
            </Text>

            <Text fontSize={"0.8em"} p={4} rounded={"lg"} m={4}>
                {
                    "Please do not reply to this email. This mailbox is not monitored and you will not receive a response. For asistance, log in to your PayPal account and click Help in the top right corner of any PayPal page or please contact us toll free at 1-888-221-1161. You can receive plain text emails instead of HTML emails. To change your Notifications preferences, log in to your account, go to your Profile, and click My settings."
                }
            </Text>

            <VStack
                p={4}
                my={4}
                width="100%"
                align={"start"}
                spacing={2}
                backgroundColor={"blackAlpha.400"}
                fontSize={"0.8em"}
            >
                <HStack>
                    <Text>Not sure why you received the email? </Text>
                    <Text color="blue">Learn More!</Text>
                </HStack>
                <Text>
                    Copyright © 1999-2021 PayPal, Inc. All rights reserved.
                    PayPal is locted at 2211 N. First St., San Jose, CA 95131.
                </Text>
                <Text>PayPal PPX001066:1.1:f3f938dcf4b5c</Text>
            </VStack>
        </>
    ),
    properties: ["grammar", "good email"]
};

const thirdWithGrammar = {
    start: (
        <Box>
            <Box width="100%" py={2}>
                <Flex>
                    <Image src={paypal} height={50} mx={10} color={"white"} />
                    <Spacer />
                    <VStack align={"end`"}>
                        <Text>Dec 23, 2021 07:09:04 PST</Text>
                        <Text>Transaction ID: 18W50219KY5300707 </Text>
                    </VStack>
                </Flex>
            </Box>

            <Text fontWeight={"bold"}> Hello,</Text>
            <Text fontWeight={"bold"} color="orange.400">
                you sent a payment of $17.66 to Lyft
            </Text>
            <Text fontWeight={"bold"}>(support@lyft.com)</Text>

            <Text pt={4} fontSize={"0.8em"}>
                it may take a few moments for this transaction to appear in your
                account.
                <Box pt={3} maxW={"70%"}>
                    <Flex>
                        <VStack align="start">
                            <Text fontWeight={"bold"}>Merchant</Text>
                            <Text>Lyft</Text>
                            <Link color={"blue"}>support@lyft.com</Link>
                        </VStack>
                        <Spacer />
                        <VStack align="start">
                            <Text fontWeight={"bold"}>
                                instruction to merchant
                            </Text>
                            <Text>
                                {"You haven't entered any instructions."}
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </Text>
            <Divider />

            <Box width={"100%"} align={"end"}>
                <Text fontSize={"0.8em"} pt="4">
                    charges will appear on your credit statement as *PAYPAL*
                    LYFT RIDE WED 1*
                </Text>

                <Text fontSize={"0.8em"}>Payment sent to support@lyft.com</Text>
            </Box>
            <Divider />
            <Text pt="3" fontWeight={"bold"}>
                issue with this transaction?
            </Text>
            <Text>
                You have 180 days from the date of the transaction to open a
                dispute in the resolution center or click the link below.
            </Text>
        </Box>
    ),
    end: (
        <>
            <Text fontWeight={"bold"} mt={4}>
                Questions? Go to the Help Center.
            </Text>

            <Text fontSize={"0.8em"} p={4} rounded={"lg"} m={4}>
                {
                    "Please do not reply to this email. This mailbox is not monitored and you will not receive a response. For assistance, log in to your PayPal account and click Help in the top right corner of any PayPal page or please contact us toll free at 1-888-221-1161. You can receive plain text emails instead of HTML emails. To change your Notifications preferences, log in to your account, go to your Profile, and click My settings."
                }
            </Text>

            <VStack
                p={4}
                my={4}
                width="100%"
                align={"start"}
                spacing={2}
                backgroundColor={"blackAlpha.400"}
                fontSize={"0.8em"}
            >
                <HStack>
                    <Text>Not sure why you received the email? </Text>
                    <Text color="blue">Learn More!</Text>
                </HStack>
                <Text>
                    Copyright © 1999-2021 PayPal, Inc. All rights reserved.
                    PayPal is located at 2211 N. First St., San Jose, CA 95131.
                </Text>
                <Text>PayPal PPX001066:1.1:f3f938dcf4b5c</Text>
            </VStack>
        </>
    ),
    properties: ["spelling", "grammar", "good email"]
};

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "PayPal Electronic Invoice Notification",
    totalSend: 1000,
    body: {
        text: [good, secondWithSpelling, thirdWithGrammar]
    }
};

export default {
    email: email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "generic",
    styled: true
};
