import { Text } from "@chakra-ui/react";
const first = {
    start: (
        <>
            <Text>{"Dear David,"}</Text>
            <Text>
                {
                    "This email confirms that your order has shipped to the following address: "
                }
            </Text>
            <Text>{"123 Main St."}</Text>
            <Text>{"New York, NY 10001"}</Text>
            <Text>
                {"If you have any issues with the shipping please contact us:"}
            </Text>
        </>
    ),
    end: (
        <>
            <Text>Regards</Text>
            <Text>Paypal Inc</Text>
        </>
    ),
    properties: ["spelling", "grammar", "good email"]
};

const second = {
    start: (
        <>
            <Text>{"Dear David,"}</Text>
            <Text>
                {
                    "this email confirms that your order has shipped to the following address: "
                }
            </Text>
            <Text>{"123 main st."}</Text>
            <Text>{"new york, ny 10001"}</Text>
            <Text>
                {"if you have any issues with the shipping please contact us:"}
            </Text>
        </>
    ),
    end: (
        <>
            <Text>Regards</Text>
            <Text>Paypal Inc</Text>
        </>
    ),
    properties: ["spelling", "good email"]
};

const third = {
    start: (
        <>
            <Text>{"dar david,"}</Text>
            <Text>
                {
                    "ths email confirms that your order has shiped to the following address: "
                }
            </Text>
            <Text>{"123 main st."}</Text>
            <Text>{"new york, ny 10001"}</Text>
            <Text>
                {"if you have any isses with the shipping please contact us:"}
            </Text>
        </>
    ),
    end: (
        <>
            <Text>Regards</Text>
            <Text>Paypal Inc</Text>
        </>
    ),
    properties: ["good email"]
};
const email = {
    to: "david@gmail.com",
    from: "someone@gmail.com",
    subject: "PayPal Account Removal",
    totalSend: 1000,
    body: {
        text: [first, second, third]
    }
};

export default {
    ...email,
    properties: ["spelling", "grammar", "good email"],
    targeted: "targeted",
    styled: false
};
