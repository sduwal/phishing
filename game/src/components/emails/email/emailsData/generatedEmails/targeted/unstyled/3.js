import { Text } from "@chakra-ui/react";

const first = {
    start: (
        <>
            <Text>Hello Frank Page,</Text>
            <Text>
                {
                    "Your password '1zbnjnx39n' has recently been found in one of the data breaches. Please update your password as soon as possible by clicking on the link below or by visiting the PayPal website."
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text>PayPal Inc.</Text>
        </>
    ),
    properties: ["spelling", "grammar"]
};

const second = {
    start: (
        <>
            <Text>Hello Frank Page,</Text>
            <Text>
                {
                    "YOUR PASSWORD '1zbnjnx39n' HAS RECENTLY BEEN FOUND IN ONE OF THE DATA BREACHES. PLEASE UPDATE YOUR PASSWORD AS SOON AS POSSIBLE BY CLICKING ON THE LINK BELOW OR BY VISITING THE PAYPAL WEBSITE."
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text>PayPal Inc.</Text>
        </>
    ),
    properties: []
};

const third = {
    start: (
        <>
            <Text>Hello Frank Page,</Text>
            <Text>
                {
                    "YOUR PASSWORD '1zbnjnx39n' HAS RECENTLY BEEN FOUND IN ONE OF THE DATA BREACHES. PLEASE UPDATE YOUR PASSWORD AS SOON AS POSSIBLE BY CLICKING ON THE LINK BELOW OR BY VISITING THE PAYPAL WEBSITE."
                }
            </Text>
        </>
    ),
    end: (
        <>
            <Text>
                We will not be responsible for any moneytary or data loss
                starting Today (Feb 22, 2021).
            </Text>
            <Text>PayPal Inc.</Text>
        </>
    ),
    properties: []
};

const email = {
    to: "frankpage@gmail.com",
    from: "someone@gmail.com",
    subject: "IMPORTANT: Your PayPal Password Has Been Found",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar"],
    targeted: "targeted",
    styled: false
};
