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
    Link,
    Center
} from "@chakra-ui/react";

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
                        <Center>
                            <Box width="50%"></Box>
                        </Center>
                    </>
                ),
                end: (
                    <>
                        <Box m={8} />
                    </>
                ),
                properties: ["spelling", "grammar"]
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
