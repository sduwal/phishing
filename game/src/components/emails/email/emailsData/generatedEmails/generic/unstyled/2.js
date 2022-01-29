// no special properties

import { Text } from "@chakra-ui/react";

function createFirstEmail({ spelling, grammar }) {
    const start =
        "Your account has been temporarily suspended due to unauthrized login attempts. Confirm your details at";
    const end = "";
    const text = [];
}

const email = {
    to: "randomperson123@gmail.com",
    from: "someone@gmail.com",
    subject: "Paypal notification",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text>
                            {
                                "Your account has been temporarily suspended due to unauthrized login attempts. Confirm your details at"
                            }
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            },
            {
                start: (
                    <>
                        <Text>
                            {
                                "ur account has been temporarily suspended due to unauthorized login attempts. Confirm your details at"
                            }
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            },
            {
                start: (
                    <>
                        <Text>
                            {
                                "Your accnt has been temporarily suspended due to unauthrized login attempts. Confirm your details at"
                            }
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            }
        ]
    }
};

export default {
    ...email,
    properties: [],
    targeted: "generic",
    styled: false
};
