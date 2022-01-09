// no special properties

import { Text } from "@chakra-ui/react";

const email = {
    to: "randomperson123@gmail.com",
    from: "paypal@gmail.com",
    subject: "Paypal notification",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text>Hello PayPal Customer,</Text>
                        <Text>
                            We are sorry to inform you that you cant access all
                            your PayPal advantages like sending money and
                            purchasing, due to account limitations.
                        </Text>
                        <Text fontWeight={"bold"} mt={3}>
                            Why my account PayPal is limited?
                        </Text>
                        <Text>
                            Because we think that your account is in danger from
                            stealing and unauthorized uses.
                        </Text>

                        <Text fontWeight={"bold"} mt={3}>
                            What can I do to resolve this issue?
                        </Text>
                        <Text>
                            You have to confirm all your account details on our
                            secure server by clicking below and following all
                            the steps.
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling", "grammar", "good email"]
            },
            {
                start: (
                    <>
                        <Text>Hello PayPal Customer,</Text>
                        <Text>
                            We are sorry to inform you that you cant access all
                            your PayPal advantages like sending money and
                            purchasing, due to account limitations.
                        </Text>
                        <Text fontWeight={"bold"} mt={3}>
                            Why my account PayPal limited?
                        </Text>
                        <Text>
                            Because we think that your account is in danger from
                            stealing and unauthorized uses.
                        </Text>

                        <Text fontWeight={"bold"} mt={3}>
                            What can I do resolve issue?
                        </Text>
                        <Text>
                            You have to confirm all your account details on our
                            secure server by click below and following all the
                            steps.
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling", "good email"]
            }
        ]
    }
};

export default {
    email: email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "generic",
    styled: false
};
