// all
// no special properties

import { ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";

const email = {
    to: "randomperson123@gmail.com",
    from: "paypl@gmail.com",
    subject: "PayPal notification",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text fontWeight={"bold"}>
                            {"Dear Customer Service"}
                        </Text>

                        <Text my="3">
                            {
                                "Your Paypal account has been limited because we've noticed significant changes in your account activity. As your payment processor, we need to understand these changes better."
                            }
                        </Text>
                        <Text>
                            {
                                "This account limitation will affect your ability to:"
                            }
                        </Text>
                        <Box mx={5}>
                            <UnorderedList>
                                <ListItem>Send or receive money</ListItem>
                                <ListItem>
                                    Withdraw money from your account
                                </ListItem>
                                <ListItem>
                                    {"Add or remove a card & bank account"}
                                </ListItem>
                                <ListItem>{"Dispute a transaction"}</ListItem>
                                <ListItem>Close your account</ListItem>
                            </UnorderedList>
                        </Box>

                        <Text my={3} fontWeight={"bold"}>
                            What to do next?
                        </Text>
                        <Text>
                            Please Log In to your PayPal account and provide the
                            requested information thorough the resolution
                            center.
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Text>
                            Thank you for understanding and coopertaion.{" "}
                        </Text>
                        <Text>Sincerly,</Text>
                        <Text>PayPal Inc.</Text>
                    </>
                ),
                properties: ["spelling", "grammar", "good email"]
            },
            {
                start: (
                    <>
                        <Text my="3">
                            {
                                "Your Paypal account has been limited because we've noticed significant changes in your account activity. As your payment processor, we need to understand these changes better."
                            }
                        </Text>
                        <Text>
                            {
                                "This account limitation will affect your ability to:"
                            }
                        </Text>
                        <Box mx={5}>
                            <UnorderedList>
                                <ListItem>Send or receive money</ListItem>
                                <ListItem>
                                    Withdraw money from your account
                                </ListItem>
                                <ListItem>
                                    {"Add or remove a card & bank account"}
                                </ListItem>
                                <ListItem>{"Dispute a transaction"}</ListItem>
                                <ListItem>Close your account</ListItem>
                            </UnorderedList>
                        </Box>

                        <Text my={3} fontWeight={"bold"}>
                            What to do next?
                        </Text>
                        <Text>
                            Please Log In to your PayPal account and provide the
                            requested information thorough the resolution
                            center.
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Text fontWeight={"bold"}>{"Dear User,"}</Text>

                        <Text my="3">
                            {
                                "Your paypal account has been limited because we've noticed significant changes in your account activity. As your payment processor, we need to understand these changes better."
                            }
                        </Text>
                        <Text>
                            {
                                "This account limitation will affect your ability to:"
                            }
                        </Text>
                        <Box mx={5}>
                            <UnorderedList>
                                <ListItem>Send or receive money</ListItem>
                                <ListItem>
                                    Withdraw money from your account
                                </ListItem>
                                <ListItem>
                                    {"Add or remove a card & bank account"}
                                </ListItem>
                                <ListItem>{"Dispute a transaction"}</ListItem>
                                <ListItem>Close your account</ListItem>
                            </UnorderedList>
                        </Box>

                        <Text my={3} fontWeight={"bold"}>
                            What to do next?
                        </Text>
                        <Text>
                            Please Log In to your payPal account and provide the
                            requested information thought the resolution center.
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Text>
                            Thank you for understanding and coopertaion.{" "}
                        </Text>
                        <Text>Sincerly,</Text>
                        <Text>PayPal Inc.</Text>
                    </>
                ),
                properties: ["good email"]
            }
        ]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "generic",
    styled: false
};
