// no special properties

import { Text } from "@chakra-ui/react";

const email = {
    to: "randomperson123@gmail.com",
    from: "john_paypal@gmail.com",
    subject: "Paypal notification",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text>
                            {
                                "Paypal: We've noticed some unusual activity on your account, for your protection your paypal account is now limited. To restore access, please visit the secure link provided and complete the steps necessary: "
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
                                "Paypal: We've noticed some unusual activity on your account, for your protection your paypal account is now limited. To restore access, please visit the secure link provided and compete the steps necssary: "
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
                                "Paypal: We've noticed some unusual activity on your account, for your protect your paypal account is now limited. To restore access, please visit the secure link provided and compete the steps necssary: "
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
    email: email,
    properties: [],
    targeted: "generic",
    styled: false
};
