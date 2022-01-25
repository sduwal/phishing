// no special properties

import { Text } from "@chakra-ui/react";

const email = {
    to: "randomperson123@gmail.com",
    from: "someone@gmail.com",
    subject: "We noticed unusual activity in your PayPal account",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text>Dear Client,</Text>
                        <Text>
                            {
                                "Some info on your account appears to be missing or incorrect. Please update your information promptly so that you can continue to enjoy all the benefits  of your account. If you don't update your information within 2 days, we'll close your account."
                            }
                        </Text>
                    </>
                ),
                end: <Text>New Resolve Limitation: 7</Text>,
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Text>Dear Client,</Text>
                        <Text>
                            {
                                "Some info on your account appears to be missing or incorrect. Pls update your information promptly so that you can continue to enjoy all the benefits  of your account. If you don;t update your info within 2 days, we'll clse your account."
                            }
                        </Text>
                    </>
                ),
                end: <Text>New Resolve Limitation: 7</Text>,
                properties: ["grammar"]
            },
            {
                start: (
                    <>
                        <Text>Dear Client,</Text>
                        <Text>
                            {
                                "Some info in your account appear to be missing or incorrect. Pls update you're information promptly so that you can continue to enjoy all the benefits  of your account. If you don;t update your info within 2 days, we'll clse your account."
                            }
                        </Text>
                    </>
                ),
                end: <Text>New Resolve Limitation: 7</Text>,
                properties: []
            }
        ]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar"],
    targeted: "generic",
    styled: false
};
