import { Text, VStack } from "@chakra-ui/react";

const first = {
    start: (
        <>
            <Text>Hello Sadie Brock,</Text>
            <VStack align={"start"} spacing={4}>
                <Text>
                    {
                        "On June 3, 2021, you removed a card ending in 1841 from your PayPal account."
                    }
                </Text>
                <Text>
                    {
                        " Any payments you authorized on this card on or before June 3, 2021 will be completed; however, no new payments will be processed on this card. Learn more:"
                    }
                </Text>
            </VStack>
        </>
    ),
    end: (
        <VStack align={"start"} spacing={4}>
            <Text>
                {
                    "If you didn't remove this card, log into your PayPal account and review your information as soon as possible. If you notice any unusual activity, please contact us immediately by clicking the Help Center link at the bottom of this email."
                }
            </Text>
            <Text>Thanks,</Text>
            <Text>PayPal</Text>
        </VStack>
    ),
    properties: ["spelling", "grammar", "good email"]
};

const second = {
    start: (
        <>
            <VStack align={"start"} spacing={4}>
                <Text>
                    {
                        "On June 3, 2021, you remove a card ending in 1841 from ur paypal account."
                    }
                </Text>
                <Text>
                    {
                        "Any payment you authroiz on this card on and before June 3, 2021 will be completed; however, no new payments will be processed on this card. Learn more:"
                    }
                </Text>
            </VStack>
        </>
    ),
    end: (
        <VStack align={"start"} spacing={4}>
            <Text>
                {
                    "If you didn't remove this card, log into your paypal account and review your information as soon as possible. If you notice any unusual activity, please contact us immediately by clicking the Help Center link at the bottom of this email."
                }
            </Text>
            <Text>Thanks,</Text>
            <Text>PayPal</Text>
        </VStack>
    ),
    properties: []
};

const third = {
    start: (
        <>
            <Text>Hello Sadie Brock,</Text>
            <VStack align={"start"} spacing={4}>
                <Text>
                    {
                        "On June 3, 2021, you removing a card ended in 1841 from your PayPal account."
                    }
                </Text>
                <Text>
                    {
                        "Any payments you will authorize on this card on and before June 3, 2021 is completing; however, no new payments will be processing on this card. Learn more:"
                    }
                </Text>
            </VStack>
        </>
    ),
    end: (
        <VStack align={"start"} spacing={4}>
            <Text>
                {
                    "If you didn't remove this card, log into your PayPal account and review your information as soon as possible. If you notice any unusual activity, please contact us immediately by clicking the Help Center link at the bottom of this email."
                }
            </Text>
        </VStack>
    ),
    properties: ["spelling"]
};

const email = {
    to: "sbrooke@gmail.com",
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
